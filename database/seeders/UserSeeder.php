<?php

namespace Database\Seeders;

use App\Models\User;
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
        $createMultipleUsers = [
            ['id' => Str::uuid(), 'name' => 'Admin Gerin Aryo', 'email' => 'admin@mail.com', 'password' => bcrypt('testpassword'), 'role' => 'admin', 'departement' => 'Security', 'position' => 'Manager II', 'is_vendor' => false, 'reference_id' => 'REF-ID-USER-1'],
            ['id' => Str::uuid(), 'name' => 'Guest Gerin Aryo', 'email' => 'guest@mail.com', 'password' => bcrypt('testpassword'), 'role' => 'user', 'departement' => 'Security', 'position' => 'Manager II', 'is_vendor' => false, 'reference_id' => 'REF-ID-USER-2'],
            ['id' => Str::uuid(), 'name' => 'Supervisor Gerin Aryo', 'email' => 'supervisor@mail.com', 'password' => bcrypt('testpassword'), 'role' => 'user', 'departement' => 'Security', 'position' => 'Supervisor', 'is_vendor' => false, 'reference_id' => 'REF-ID-USER-3'],
            ['id' => Str::uuid(), 'name' => 'Vendor Gerin Aryo', 'email' => 'vendor@mail.com', 'password' => bcrypt('testpassword'), 'role' => 'user', 'departement' => 'Vendor', 'position' => 'Manager', 'is_vendor' => true, 'reference_id' => 'REF-ID-USER-4']
        ];

        User::insert($createMultipleUsers);
        DB::table('users')->insert(
            $createMultipleUsers
        );
    }
}
