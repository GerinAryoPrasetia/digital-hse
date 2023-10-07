<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('apar_report', function (Blueprint $table) {
            //
            $table->string("apar_number")->default('');
            $table->string("apar_production")->default('');
            $table->string("apar_type")->default('');
            $table->string("apar_jenis")->default('');
            $table->string("apar_year_of_production")->default('');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('apar_report', function (Blueprint $table) {
            //
        });
    }
};
