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
        Schema::create('accident_nature_injury_detail', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->string('accident_injured_person_id');
            $table->foreign('accident_injured_person_id')->references('id')->on('accident_injured_person');
            $table->string('nature');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('accident_nature_injury_detail');
    }
};
