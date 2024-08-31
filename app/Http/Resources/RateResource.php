<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class RateResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        if(isset($this->count_point)){
            return [
                'product_id'=>(string)$this->product_id,
                'count_point'=>(string)$this->count_point,
                'total_point'=>(string)$this->total_point,
            ];
        }
        return [
            'id'=>(string)$this->id,
            'product_id'=>(string)$this->product_id,
            'user_id'=>(string)$this->user_id,
            'rate_Point'=>(string)$this->rate_Point,
        ];
    }
}
