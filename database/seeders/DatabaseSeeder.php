<?php

namespace Database\Seeders;
use App\Models\User;
use Database\Seeders\FavoriteSeeder ;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(CategorySeeder::class);
         $this->call(ProductSeeder::class);
         $this->call(OrderSeeder::class);
    }
}
