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
        Schema::create('wp_user_brief', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('wp_id')->nullable();
            $table->foreign('wp_id')->references('id')->on('working_permits')->onDelete('cascade');
            $table->string('name');
            $table->string('company_name');
            $table->string('function_name');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('wp_user_brief');
    }
};
