<?php

namespace Database\Seeders;

use App\Models\Apar\AparArea;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class AreaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $createMultipleArea = [
            ['id' => Str::uuid(), 'area_name' => 'Ruang Peralatan'],
            ['id' => Str::uuid(), 'area_name' => 'Gudang Produksi'],
            ['id' => Str::uuid(), 'area_name' => 'Kantin'],
            ['id' => Str::uuid(), 'area_name' => 'Head Office']
        ];

        AparArea::insert($createMultipleArea);
        DB::table('apar_area')->insert(
            $createMultipleArea
        );
    }
}
