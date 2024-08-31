<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        if(isset($this->first_name))
        return [
            'id'=>$this->id,
            'card_id'=>$this->card_id,
            'user_id'=>$this->user_id,
            'product_id'=>$this->product_id,
            'quantity_product'=>$this->quantity_product,
            'name'=>$this->p_name,
            'image'=>$this->p_image_1,
            'quantity_product'=>$this->quantity_product,
            'price_uniter'=>$this->p_price,
            'price_total'=>$this->price_sale,
            'State'=>$this->State,
            'Username'=>$this->first_name.' ' .$this->last_name,
        ];
        if(isset($this->p_name))
            return [
                'id'=>$this->id,
                'card_id'=>$this->card_id,
                'user_id'=>$this->user_id,
                'product_id'=>$this->product_id,
                'quantity_product'=>$this->quantity_product,
                'name'=>$this->p_name,
                'image'=>$this->p_image_1,
                'quantity_product'=>$this->quantity_product,
                'price_uniter'=>$this->p_price,
                'price_total'=>$this->price_sale,
                'State'=>$this->State,
            ];
           
        return [
            'id'=>$this->id,
            'product_id'=>$this->product_id,
            'user_id'=>$this->user_id,
            'card_id'=>$this->card_id,
            'quantity_product'=>(string)$this->quantity_product,
            'price_sale'=>$this->price_sale,
            'State'=>$this->State,
        ];
    }

}
