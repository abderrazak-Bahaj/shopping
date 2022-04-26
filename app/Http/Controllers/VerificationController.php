<?php

namespace App\Http\Controllers;

use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Foundation\Auth\VerifiesEmails;
use Illuminate\Auth\Events\Verified;
use Illuminate\Http\Request;

class VerificationController extends Controller
{

    use VerifiesEmails;

    public function __construct()
    {
        $this->middleware('auth:api')->only('resend');
        $this->middleware('signed')->only('verify');
        $this->middleware('throttle:6,1')->only('verify', 'resend');
    }

    public function resend(Request $request)
    {
        if ($request->user()->hasVerifiedEmail()) {
            return response(['message'=>'Email already verified'],202);
        }

        $request->user()->sendEmailVerificationNotification();

        if($request->wantsJson()){
            return response(['message'=>'Email Sent'],202);
        }
        return back()->with('resent',true);
    }

    public function verify(Request $request)
    {

       auth()->loginUsingId($request->route('id'));

       if($request->route('id') != $request->user()->getKey()){
           throw new AuthorizationException;
       }
       
        if ($request->user()->hasVerifiedEmail()) {
            return response(['message'=>'Email already verified'],202);
        }

        if ($request->user()->markEmailAsVerified()) {
            event(new Verified($request->user()));
        }

        return response(['message'=>'successfully verified']);;
    }
}
