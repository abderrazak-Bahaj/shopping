<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProductRequest extends FormRequest
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
            'category_id'=>'required',
            'p_name'=>'required|string|max:50',
            'p_description'=>'required|string|min:15',
            'p_color'=>'required|string|max:50',    
            'p_price'=>'required|numeric|between:0.99,10000',
            'p_image_1'=>'required|image|mimes:jpeg,png,jpg|max:2048',
            'p_image_2'=>'image|mimes:jpeg,png,jpg|max:2048',
            'p_image_3'=>'image|mimes:jpeg,png,jpg|max:2048',
            'p_image_4'=>'image|mimes:jpeg,png,jpg|max:2048',
        ];
    }
}
