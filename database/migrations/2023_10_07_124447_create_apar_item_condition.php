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
        Schema::create('apar_item_condition', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('apar_item_id');
            $table->foreign('apar_item_id')->references('id')->on('apar_item')->onDelete('cascade');
            $table->boolean('checked')->default(false);
            $table->string('condition')->default('');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('apar_item_condition');
    }
};
