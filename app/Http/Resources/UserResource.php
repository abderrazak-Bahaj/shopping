<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     */
    public function toArray($request)
    {
        return [
            'first_name' => $request->first_name,
            'last_name'=>$request->last_name,
            'address'=>$request->address,
            'phone_number'=>$request->phone_number,
            'Date_birth'=>$request->Date_birth,
            'name'=>$request->name,
            'email'=>$request->email,
            'isAdmin'=>(boolean)$request->isAdmin,
            ];
    }
}
