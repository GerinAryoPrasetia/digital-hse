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
            $table->text('status_remarks')->nullable();
            $table->text('possible_cause')->nullable();
            $table->timestamp('tanggal_remarks')->nullable();
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
