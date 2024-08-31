<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;

class Cart extends Model
{
    use HasFactory,SoftDeletes,Notifiable;
    protected $fillable = ['product_id','user_id','quantity'];
    
    public function user()
    {
        return $this->hasMany(User::class);
    }
    public function product()
    {
        return $this->hasMany(Product::class);
    }
}
