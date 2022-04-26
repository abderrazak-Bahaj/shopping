<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;

class Product extends Model
{
    use HasFactory,SoftDeletes,Notifiable;
    protected $fillable = [
        'p_name',
        'p_slug',
        'p_description',
        'category_id',
        'user_id',
        'p_price',
        'p_image_1',
        'p_image_2',
        'p_image_3',
        'p_image_4',
        'p_color',
    ];
    public function scopeSearch($query, $keywords)
    {
        return $query->where('p_name', 'LIKE', '%'.$keywords.'%');
    }
    public function category()
    {
        return $this->belongsTo(Product::class);
    }
}
