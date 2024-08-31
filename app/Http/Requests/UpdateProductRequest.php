<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProductRequest extends FormRequest
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
            'category_id'=>'exists:categorais,id',
            'p_name'=>'string|max:50',
            'p_description'=>'string|min:15',
            'p_color'=>'string|max:50',
            'p_price'=>'number',
            'p_image_1'=>'image|mimes:jpeg,png,jpg|max:2048',
            'p_image_2'=>'image|mimes:jpeg,png,jpg|max:2048',
            'p_image_3'=>'image|mimes:jpeg,png,jpg|max:2048',
            'p_image_4'=>'image|mimes:jpeg,png,jpg|max:2048',
        ];
    }
}
