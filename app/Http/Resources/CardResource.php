<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CardResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id'=> (string)$this->id,
            'user_id'=>(string)$this->user_id,
            'card_number'=>$this->card_number,
            'card_date_expr'=>(string)$this->card_date_expr,
            'card_sold'=>(string)$this->card_sold,
            'type'=>(string)$this->type,
            'cvv'=>(string)$this->cvv
            ];
    }
}
