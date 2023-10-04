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
        Schema::create('wp_status', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('working_permit_id');
            $table->foreign('working_permit_id')->references('id')->on('working_permits')->onDelete('cascade');
            $table->uuid('user_officer_id');
            $table->foreign('user_officer_id')->references('id')->on('users')->onDelete('cascade');
            $table->uuid('user_supervisor_id');
            $table->foreign('user_supervisor_id')->references('id')->on('users')->onDelete('cascade');
            $table->boolean('is_approved_first_step')->default(false);
            $table->boolean('is_approved_second_step')->default(false);
            $table->boolean('is_done')->default(false);
            $table->timestamp('first_approved_at')->nullable();
            $table->timestamp('second_approved_at')->nullable();
            $table->boolean('is_rejected')->default(false);
            $table->timestamp('done_at')->nullable();

            $table->string('status')->default('PENDING');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('wp_status');
    }
};
