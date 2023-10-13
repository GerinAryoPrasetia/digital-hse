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
        Schema::table('working_permits', function (Blueprint $table) {
            //
            $table->dropColumn('permit_to_work');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('working_permits', function (Blueprint $table) {
            //
            $table->text('permit_to_work')->nullable();
        });
    }
};
