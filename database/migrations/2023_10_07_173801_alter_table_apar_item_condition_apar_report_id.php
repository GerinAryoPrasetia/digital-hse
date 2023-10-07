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
        Schema::table('apar_item_condition', function (Blueprint $table) {
            //
            $table->uuid('apar_report_id')->nullable();
            $table->foreign('apar_report_id')->references('id')->on('apar_report')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('apar_item_condition', function (Blueprint $table) {
            //
        });
    }
};
