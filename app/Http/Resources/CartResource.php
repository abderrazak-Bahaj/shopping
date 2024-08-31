<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CartResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        if(isset($this->p_name)){
            return [
                'id'=>(string)$this->id,
                'user_id'=>(string)$this->user_id,
                'quantity'=>(string)$this->quantity,
                'product_id'=>(string)$this->product_id,
                'p_name'=>(string)$this->p_name,
                'p_price'=>(string)$this->p_price,
                'p_image'=>(filter_var($this->p_image_1,FILTER_VALIDATE_URL))?$this->p_image_1:asset('storage/'.$this->p_image_1),
                'p_color'=>(string)$this->p_color,
            ];
        }
        return [
            'id'=>(string)$this->id,
            'product_id'=>(string)$this->product_id,
            'user_id'=>(string)$this->user_id,
            'quantity'=>(string)$this->quantity,
        ];
    }
}
