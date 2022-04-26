<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Order extends Model
{
    use HasFactory,SoftDeletes;
    protected $fillable = ['product_id','user_id','card_id','quantity_product','price_sale'];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
