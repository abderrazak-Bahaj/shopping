<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'first_name' =>'required|max:60',
            'last_name' =>'required|max:60',
            'address' =>'required|string|max:70',
            'phone_number' =>'required|string|min:10|max:15',
            'Date_birth' =>'required|date_format:Y-m-d|date',
            'email' =>'required|unique:users|email',
            'password' =>'required|min:6|confirmed',
        ];
    }
}
