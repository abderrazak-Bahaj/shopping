<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     */
    public function toArray($request)
    {
        if(filter_var($this->p_image_1,FILTER_VALIDATE_URL) ){
            return [
                'id'=>(string)$this->id,
                'category_id'=>(string)$this->category_id,
                'user_id'=>(string)$this->user_id,
                'p_name'=>$this->p_name,
                'p_slug'=>$this->p_slug,
                'p_description'=>$this->p_description,
                'p_image_1'=>$this->p_image_1,
                'p_image_2'=>$this->p_image_2,
                'p_image_3'=>$this->p_image_3,
                'p_image_4'=>$this->p_image_4,
                'p_color'=>$this->p_color,
                'p_price'=>(string)$this->p_price,
                'created_at'=>(string)$this->created_at,
            ];
        }

        return [
                'id'=>(string)$this->id,
                'category_id'=>(string)$this->category_id,
                'user_id'=>(string)$this->user_id,
                'p_name'=>$this->p_name,
                'p_slug'=>$this->p_slug,
                'p_description'=>$this->p_description,
                'p_image_1'=>asset('storage/'.$this->p_image_1),
                'p_image_2'=>asset('storage/'.$this->p_image_2),
                'p_image_3'=>asset('storage/'.$this->p_image_3),
                'p_image_4'=>asset('storage/'.$this->p_image_4),
                'p_color'=>$this->p_color,
                'p_price'=>(string)$this->p_price,
                'created_at'=>(string)$this->created_at,
            ];
    }
}
