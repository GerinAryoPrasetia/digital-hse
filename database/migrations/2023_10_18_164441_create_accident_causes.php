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
        Schema::create('accident_causes', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->string('accident_id');
            $table->foreign('accident_id')->references('id')->on('accident');
            $table->string('type');
            $table->string('condition');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('accident_causes');
    }
};
