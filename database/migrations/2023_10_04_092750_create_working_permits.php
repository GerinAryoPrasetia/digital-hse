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
        Schema::create('working_permits', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('permit_number')->unique();
            $table->uuid('issuer_id');
            $table->foreign('issuer_id')->references('id')->on('users')->onDelete('cascade');
            $table->uuid('supervisor_id');
            $table->foreign('supervisor_id')->references('id')->on('users')->onDelete('cascade');
            $table->uuid('officer_id');
            $table->foreign('officer_id')->references('id')->on('users')->onDelete('cascade');

            $table->string('permit_to_work');
            $table->string('equipment_to_work');
            $table->string('work_site');
            $table->string('brief_of_work');
            $table->timestamp('start_date');
            $table->timestamp('end_date');

            $table->text('remarks')->nullable();
            $table->text('additional_comments')->nullable();


            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('working_permits');
    }
};
