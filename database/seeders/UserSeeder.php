<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('users')->insert(
            [
                'id' => Str::uuid(),
                'name' => 'test admin user',
                'email' => 'admin@gmail.com',
                'password' => Hash::make('testpassword'),
                'role' => 'admin',
                'departement' => 'Security',
                'position' => 'Security',
            ],
            [
                'id' => Str::uuid(),
                'name' => 'test user',
                'email' => 'user@gmail.com',
                'password' => Hash::make('testpassword'),
                'role' => 'user',
                'departement' => 'Security',
                'position' => 'Security',
            ]
        );
    }
}
