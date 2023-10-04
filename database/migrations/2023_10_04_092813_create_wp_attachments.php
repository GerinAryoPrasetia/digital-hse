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
        Schema::create('wp_attachments', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('working_permit_id');
            $table->foreign('working_permit_id')->references('id')->on('working_permits')->onDelete('cascade');
            $table->string('attachment_name')->default('');
            $table->string('attachment_path')->default('');
            $table->string('attachment_type')->default('');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('wp_attachments');
    }
};
