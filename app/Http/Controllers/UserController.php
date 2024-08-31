<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Method Register Account 
     * 
     * @return array
     */
    public function Register(StoreUserRequest $req)
    {
        $newUser = User::create([
            'first_name' => $req->first_name,
            'last_name' => $req->last_name,
            'address' => $req->address,
            'phone_number' => $req->phone_number,
            'Date_birth' => $req->Date_birth,
            'email' => $req->email,
            'password' => Hash::make($req->password),
        ]);
        $login = ['email' => $req->email, 'password' => $req->password];
        if (!Auth::attempt($login)) {
            return response(['message' => 'Invalid Login credentials.'], 201);
        }
        $accessToken = Auth::user()->createToken('authToken')->accessToken;
        return response([
            'user' => Auth::user(),
            'access_Token' => $accessToken
        ]);
    }

    /**
     * Method Login User And Create Tokens 
     *
     * @return array
     */


    public function Login(Request $req)
    {
        $login = $req->validate([
            'email' => 'required|string|email',
            'password' => 'required|string'
        ]);
        if (!Auth::attempt($login)) {
            return response(['message' => 'Invalid Login credentials.'], 201);
        }
        $accessToken = Auth::user()->createToken('authToken')->accessToken;
        return response([
            'user' => Auth::user(),
            'access_Token' => $accessToken
        ]);
    }

    /**
     * Method check Token User  
     *
     * @return array
     */
    public function checkToken()
    {
        return Auth::user();
    }

    /**
     * Method Logout User  
     *
     * @return array
     */
    public function Logout()
    {
        Auth::Logout();
    }

    /**
     * Method update User  
     *
     * @return array
     */
    public function Update(Request $req)
    {
        $newUser = $req->validate([
            'phone_number' => 'required|string',
            'address' => 'required|string',
            'last_name' => 'required|string|string',
            'first_name' => 'required|string|string',
            'Date_birth' => 'required|date|before:today',
            'password' => 'required|string|min:6',
        ]);

        $user = User::find(Auth::id());
        if (!Hash::check($req->password, $user->password))
            return response("Password Incorrect", 401);
        $user->Update([
            'phone_number' => $req->phone_number,
            'address' => $req->address,
            'last_name' => $req->last_name,
            'first_name' => $req->first_name,
            'Date_birth' => $req->Date_birth,
        ]);
        return $user;
    }

    /**
     * Method Edit Password  
     *
     * @return array
     */
    public function EditPassword(Request $req)
    {
        $newUser = $req->validate([
            'currentPassword' => 'required|min:6',
            'newPassword' => 'required|min:6|confirmed',
        ]);

        $user = User::find(Auth::id());
        if (!Hash::check($req->currentPassword, $user->password))
            return response("Password Incorrect", 401);
        $user->Update([
            'password' => Hash::make($req->newPassword)
        ]);
        return $user;
    }

    /**
     * Method to Count User
     *
     * @return array
     */

    public function statistic()
    {
        if (!Auth::user()->isAdmin)
            return response("Unauthorized", 401);
        $user = User::groupBy('isAdmin')->selectRaw('count(*) as Count,isAdmin')->get();;
        return $user;
    }

    /**
     * Method to Count User
     *
     * @return array
     */

    public function list()
    {
        if (!Auth::user()->isAdmin)
            return response("Unauthorized", 401);
        $user = User::orderBy('created_at','DESC')->get();
        return $user;
    }

    /**
     * Method to Count User
     *
     * @return array
     */

    public function delete(User $user, Request $req)
    {
        $req->validate([
            'password' => 'required|min:6',
        ]);
        if (!Auth::user()->isAdmin)
            return response("Unauthorized", 401);
        $admin = User::find(Auth::id());
        if (!Hash::check($req->password, $admin->password))
            return response("Password Incorrect", 401);
        $user->delete();
        return response(null, 204);
    }

    /**
     * Method to Count User
     *
     * @return array
     */

    public function setAdmin(User $user, Request $req)
    {
        $req->validate([
            'password' => 'required|min:6',
            'isAdmin' => 'required',
        ]);
        if (!Auth::user()->isAdmin)
            return response("Unauthorized", 401);
        $admin = User::find(Auth::id());
        if (!Hash::check($req->password, $admin->password))
            return response("Password Incorrect", 401);
        $user->isAdmin= $req->isAdmin;
        $user->save();
        return $user;
    }
}
