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
        Schema::create('apar_item_remarks', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('apar_item_condition_id');
            $table->foreign('apar_item_condition_id')->references('id')->on('apar_item_condition')->onDelete('cascade');
            $table->text('remark')->nullable();
            $table->text('possible_cause')->nullable();
            $table->text('action')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('apar_item_remarks');
    }
};
