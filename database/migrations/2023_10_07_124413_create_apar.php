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
        Schema::create('apar', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('apar_number')->default('');
            $table->string('type')->default('');
            $table->string('production')->default('');
            $table->string('jenis')->nullable();
            $table->timestamp('expired_at')->nullable();
            $table->string('year_of_production')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('apar');
    }
};
