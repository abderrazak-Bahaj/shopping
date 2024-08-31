<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;

class Category extends Model
{
    use HasFactory,SoftDeletes,Notifiable;
    protected $fillable = [
        'cat_name',
        'cat_img'
    ];
    
    protected $hidden = [
        'created_at',
        'updated_at'
    ];

    public function product()
    {
        return $this->hasMany(Product::class);
    }


}
