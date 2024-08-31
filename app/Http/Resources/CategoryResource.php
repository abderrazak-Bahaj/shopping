<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        if(filter_var($this->cat_img,FILTER_VALIDATE_URL) ){
            return [
                'id'=>(string)$this->id,
                'cat_name'=>$this->cat_name,
                'cat_img'=>$this->cat_img,
            ];
        }
        return [
            'id'=>(string)$this->id,
            'cat_name'=>$this->cat_name,
            'cat_img'=>asset('storage/'.$this->cat_img),
        ];
    }
}
