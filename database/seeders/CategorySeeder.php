<?php

namespace Database\Seeders;

use App\Models\Category;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
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
    $faker = Faker::create();
    $categories = [
        'Electronics',
        'Fashion',
        'Home & Kitchen',
        'Books',
        'Toys',
        'Sports & Outdoors',
        'Beauty & Personal Care'
    ];

    foreach ($categories as $category) {
        DB::table('categories')->insert([
            'cat_name' => $category,
            'cat_img' => $faker->imageUrl(640, 480, 'category', true, $category),
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
}
