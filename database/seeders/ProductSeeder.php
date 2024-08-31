<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();

        for ($i = 0; $i < 50; $i++) {
            DB::table('products')->insert([
                'p_name' => $faker->word, // Use 'word' for a single word product name
                'p_slug' => $faker->slug,
                'p_description' => $faker->paragraph,
                'p_image_1' => $faker->imageUrl(640, 480, 'product', true, 'Product 1'),
                'p_image_2' => $faker->imageUrl(640, 480, 'product', true, 'Product 2'),
                'p_image_3' => $faker->imageUrl(640, 480, 'product', true, 'Product 3'),
                'p_image_4' => $faker->imageUrl(640, 480, 'product', true, 'Product 4'),
                'p_color' => $faker->safeColorName,
                'p_price' => $faker->randomFloat(2, 10, 1000),
                'category_id' => $faker->numberBetween(1, 7), // Assuming you have 7 categories
                'user_id' => 1, // Assuming the user_id is 1
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
