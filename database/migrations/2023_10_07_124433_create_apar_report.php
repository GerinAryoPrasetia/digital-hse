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
        Schema::create('apar_report', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('apar_id');
            $table->foreign('apar_id')->references('id')->on('apar')->onDelete('cascade');
            $table->uuid('checked_by_id');
            $table->foreign('checked_by_id')->references('id')->on('users')->onDelete('cascade');
            $table->uuid('acknowladge_user_id');
            $table->foreign('acknowladge_user_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('spec_control')->default('');
            $table->string('pressure_control')->default('');
            $table->timestamp('pressure_control_at')->nullable();
            $table->timestamp('pressure_control_expired_at')->nullable();
            $table->string('checked_pressure_control')->default('');
            $table->text('notes')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('apar_report');
    }
};
