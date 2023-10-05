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
            $table->boolean('is_approved_first_step')->default(false);
            $table->boolean('is_approved_second_step')->default(false);
            $table->boolean('is_done_by_supervisor')->default(false);
            $table->boolean('is_done_by_officer')->default(false);
            $table->timestamp('first_approved_at')->nullable();
            $table->timestamp('second_approved_at')->nullable();
            $table->boolean('is_rejected')->default(false);

            $table->string('status')->default('WAITING FOR APPROVAL');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('working_permits', function (Blueprint $table) {
            //
        });
    }
};
