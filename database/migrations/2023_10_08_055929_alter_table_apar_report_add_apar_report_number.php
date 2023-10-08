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
        Schema::table('apar_report', function (Blueprint $table) {
            //
            $table->string('apar_report_number')->default('');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('apar_report', function (Blueprint $table) {
            //
            $table->dropColumn('apar_report_number');
        });
    }
};
