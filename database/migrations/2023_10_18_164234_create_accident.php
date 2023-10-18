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
        Schema::create('accident', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->string('supervisor_id')->nullable();
            $table->foreign('supervisor_id')->references('id')->on('users');
            $table->string('divisi');
            $table->string('departement');
            $table->string('seksi');
            $table->timestamp('waktu_kejaidan');
            $table->timestamp('waktu_lapor');
            $table->string('lokasi');
            $table->string('jam_mulai_kerja');
            $table->string('jam_selesai_kerja');
            $table->string('nama_pengawas_kerja');
            $table->text('uraian_kejadian');
            $table->string('kerugian');
            $table->string('level_category');
            $table->string('leader_id')->nullable();
            $table->foreign('leader_id')->references('id')->on('users');
            $table->string('hod_id')->nullable();
            $table->foreign('hod_id')->references('id')->on('users');
            $table->string('hse_coor_id')->nullable();
            $table->foreign('hse_coor_id')->references('id')->on('users');
            $table->string('chairman_id')->nullable();
            $table->foreign('chairman_id')->references('id')->on('users');
            $table->boolean('is_closed')->default(false);
            $table->string('closed_by')->nullable();
            $table->boolean('approved_by_leader')->default(false);
            $table->boolean('approved_by_hod')->default(false);
            $table->boolean('approved_by_hse_coor')->default(false);
            $table->boolean('approved_by_chairman')->default(false);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('accident');
    }
};
