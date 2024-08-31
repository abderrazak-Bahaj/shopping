<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;

class AdminSetupController extends Controller
{
    public function setup()
    {
        // Run migrations
        Artisan::call('migrate:fresh'); // Use fresh to drop and recreate tables

        // Reset all data fixtures (this will be unnecessary if using migrate:fresh)
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        foreach (DB::select('SHOW TABLES') as $table) {
            $tableName = $table->{'Tables_in_' . env('DB_DATABASE')};
            DB::table($tableName)->truncate();
        }
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');
        
        // Seed the database
        Artisan::call('db:seed');
        
        // Link storage
        Artisan::call('storage:link');

        // Optional: If Passport is required
       Artisan::call('passport:install');

        return response()->json([
            'message' => 'Setup completed successfully!',
        ]);
    }
}
