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
        Schema::create('apar_condition', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('pic_area_id')->nullable();
            $table->foreign('pic_area_id')->references('id')->on('users')->onDelete('cascade');
            $table->uuid('apar_report_id');
            $table->foreign('apar_report_id')->references('id')->on('apar_report')->onDelete('cascade');
            $table->uuid('apar_item_condition_id');
            $table->foreign('apar_item_condition_id')->references('id')->on('apar_item_condition')->onDelete('cascade');
            $table->boolean('verified_by_hse')->default(false);
            $table->boolean('verified_by_p2k')->default(false);
            $table->uuid('hse_id')->nullable();
            $table->foreign('hse_id')->references('id')->on('users')->onDelete('cascade');
            $table->uuid('p2k_id')->nullable();
            $table->foreign('p2k_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('year_checked')->default('');
            $table->string('month_checked')->default('');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('apar_condition');
    }
};
