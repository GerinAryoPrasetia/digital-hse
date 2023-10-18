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
        Schema::create('accident_injured_person', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->string('accident_id');
            $table->foreign('accident_id')->references('id')->on('accident');
            $table->string('name');
            $table->string('id_number');
            $table->string('tanggal_lahir');
            $table->string('usia');
            $table->string('jenis_kelamin');
            $table->string('jabatan');
            $table->string('bagian');
            $table->string('lama_bekerja');
            $table->boolean('is_perusahaan');
            $table->string('perusahaan');
            $table->string('nama_supervisor');
            $table->string('severity');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('accident_injured_person');
    }
};
