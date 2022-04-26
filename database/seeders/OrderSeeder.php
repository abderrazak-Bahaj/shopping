<?php

namespace Database\Seeders;

use App\Models\Order;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('cards')->insert([
            [
                'user_id'=> '2',
                'card_number'=> '152452365124',
                'card_date_expr'=> '2024-02-02',
                'card_sold'=> 5000,
                'cvv'=> '254',
                'type'=> 'MASTER CARD',
                'created_at'=> Carbon::now(),
                'updated_at'=>  Carbon::now(),
            ],
            [
                'user_id'=> '2',
                'card_number'=> '1080452365120',
                'card_date_expr'=> '2025-02-02',
                'card_sold'=> 5000,
                'cvv'=> '285',
                'type'=> 'VISA',
                'created_at'=> Carbon::now(),
                'updated_at'=>  Carbon::now(),
            ],
        ]);

        DB::table('orders')->insert([
            [
                'product_id'=> 4,
                'user_id'=> 2,
                'card_id'=> 1,
                'quantity_product'=> 2,
                'State'=> 'in delivery',
                'price_sale'=>500.50,
                'created_at'=> Carbon::now(),
                'updated_at'=>  Carbon::now(),
            ],
            [
                'product_id'=> 2,
                'user_id'=> 2,
                'card_id'=> 1,
                'quantity_product'=> 1,
                'State'=> 'in delivery',
                'price_sale'=>600.50,
                'created_at'=> Carbon::now(),
                'updated_at'=>  Carbon::now(),
            ],
            [
                'product_id'=> 6,
                'user_id'=> 2,
                'card_id'=> 1,
                'quantity_product'=> 1,
                'State'=> 'in delivery',
                'price_sale'=>700.50,
                'created_at'=> Carbon::now(),
                'updated_at'=>  Carbon::now(),
            ],
            [
                'product_id'=> 3,
                'user_id'=> 2,
                'card_id'=> 1,
                'quantity_product'=> 6,
                'State'=> 'in delivery',
                'price_sale'=>2000.50,
                'created_at'=> Carbon::now(),
                'updated_at'=>  Carbon::now(),
            ],
            [
                'product_id'=> 4,
                'user_id'=> 2,
                'card_id'=> 2,
                'quantity_product'=> 5,
                'State'=> 'success',
                'price_sale'=>500.50,
                'created_at'=> Carbon::now(),
                'updated_at'=>  Carbon::now(),
            ],
            [
                'product_id'=> 2,
                'user_id'=> 2,
                'card_id'=> 2,
                'quantity_product'=> 1,
                'State'=> 'success',
                'price_sale'=>200.99,
                'created_at'=> Carbon::now(),
                'updated_at'=>  Carbon::now(),
            ],
            [
                'product_id'=> 5,
                'user_id'=> 2,
                'card_id'=> 1,
                'quantity_product'=> 2,
                'State'=> 'success',
                'price_sale'=>600.50,
                'created_at'=> Carbon::now(),
                'updated_at'=>  Carbon::now(),
            ],
            [
                'product_id'=> 7,
                'user_id'=> 2,
                'card_id'=> 1,
                'quantity_product'=> 2,
                'State'=> 'reversion',
                'price_sale'=>700.50,
                'created_at'=> Carbon::now(),
                'updated_at'=>  Carbon::now(),
            ],
            [
                'product_id'=> 8,
                'user_id'=> 2,
                'card_id'=> 2,
                'quantity_product'=> 2,
                'State'=> 'reversion',
                'price_sale'=>1000.50,
                'created_at'=> Carbon::now(),
                'updated_at'=>  Carbon::now(),
            ],
            
        ]);
    }
}
