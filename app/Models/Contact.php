<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;

class Contact extends Model
{
    use HasFactory,SoftDeletes,Notifiable;
    protected $fillable = [
        'email',
        'full_name',
        'subject',
        'message',
    ];
    
    protected $hidden = [
        'created_at',
        'updated_at'
    ];}
