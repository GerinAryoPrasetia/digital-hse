<?php

namespace App\Models\WP;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SafetyPersonal extends Model
{
    use HasFactory, HasUuids;

    protected $table = 'wp_safety_personal';
    protected $primaryKey = 'id';
    public $timestamps = true;

    protected $fillable = [
        'working_permit_id',
        'data',
        'created_at',
        'updated_at',
    ];
}
