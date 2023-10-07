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
            $table->dropForeign('apar_report_apar_id_foreign');
            $table->dropColumn('apar_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('apar_report', function (Blueprint $table) {
            //
            $table->uuid('apar_id')->nullable();
            $table->foreign('apar_id')->references('id')->on('apar')->onDelete('cascade');
        });
    }
};
