<?php

namespace App\Models\WP;

use App\Models\WorkingPermits;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WpUserBrief extends Model
{
    use HasFactory, HasUuids;
    protected $table = 'wp_user_brief';
    protected $primaryKey = 'id';
    public $timestamps = true;

    protected $fillable = [
        'wp_id',
        'name',
        'company_name',
        'function_name',
        'no_telp'
    ];

    public function workingPermit()
    {
        return $this->belongsTo(WorkingPermits::class, 'wp_id');
    }
}
