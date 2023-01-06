<?php

namespace Database\Seeders;

use App\Models\Category;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
     //Factory to Generate 3 user
     DB::table('users')->insert([
        [
            'first_name' => 'abderrazak',
            'last_name' => 'Bahaj',
            'address' => 'Morocco Tinghir',
            'phone_number' => '+212678714069',
            'Date_birth' => '1998-05-12',
            'email' => 'admin@email.com',
            'isAdmin' => 1,
            'email_verified_at' => Carbon::now(),
            'remember_token' => Str::random(10),
            'password' => Hash::make('password123'),
            'created_at'=> Carbon::now(),
            'updated_at'=>  Carbon::now(),
        ],
        [
            'first_name' => 'Mohammed',
            'last_name' => 'Bahaj',
            'address' => 'Morocco Casa',
            'phone_number' => '+212678714069',
            'Date_birth' => '1998-05-12',
            'email' => 'user1@email.com',
            'isAdmin' => 0,
            'email_verified_at' => Carbon::now(),
            'remember_token' => Str::random(10),
            'password' => Hash::make('password123'),
            'created_at'=> Carbon::now(),
            'updated_at'=>  Carbon::now(),
        ],
        [
            'first_name' => 'Said',
            'last_name' => 'Bahaj',
            'address' => 'Morocco Rabat',
            'phone_number' => '+212678714069',
            'Date_birth' => '1998-05-12',
            'email' => 'user2@email.com',
            'isAdmin' => 0,
            'email_verified_at' => Carbon::now(),
            'remember_token' => Str::random(10),
            'password' => Hash::make('password123'),
            'created_at'=> Carbon::now(),
            'updated_at'=>  Carbon::now(),
        ]
        ]);
    //Factory to Generate 8 Category
    DB::table('categories')->insert([
        [
            'cat_name' => 'Phone',
            'cat_img' => 'category-img/phone.webp',
            'created_at'=> Carbon::now(),
            'updated_at'=>  Carbon::now(),
        ],
        [
            'cat_name' => 'Televisions',
            'cat_img' => 'category-img/tv.jpg',
            'created_at'=> Carbon::now(),
            'updated_at'=>  Carbon::now(),
        ],
        [
            'cat_name' => 'Perfume',
            'cat_img' => 'category-img/Perfume.webp',
            'created_at'=> Carbon::now(),
            'updated_at'=>  Carbon::now(),
        ],[
            'cat_name' => 'Shoes',
            'cat_img' => 'category-img/shose.webp',
            'created_at'=> Carbon::now(),
            'updated_at'=>  Carbon::now(),
        ],[
            'cat_name' => 'Camera',
            'cat_img' => 'category-img/camera.webp',
            'created_at'=> Carbon::now(),
            'updated_at'=>  Carbon::now(),
        ],[
            'cat_name' => 'Watch',
            'cat_img' => 'category-img/watch.webp',
            'created_at'=> Carbon::now(),
            'updated_at'=>  Carbon::now(),
        ],[
            'cat_name' => 'Back bag',
            'cat_img' => 'category-img/backbag.webp',
            'created_at'=> Carbon::now(),
            'updated_at'=>  Carbon::now(),
        ],
        [
            'cat_name' => 'Headphones',
            'cat_img' => 'category-img/Headphones.webp',
            'created_at'=> Carbon::now(),
            'updated_at'=>  Carbon::now(),
        ]
        ]);
    }
}
