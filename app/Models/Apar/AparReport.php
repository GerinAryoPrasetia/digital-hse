<?php

namespace App\Models\Apar;

use App\Models\User;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AparReport extends Model
{
    use HasFactory, HasUuids;
    protected $primaryKey = 'id';
    protected $table = 'apar_report';
    public $timestamps = true;

    protected $fillable = [
        'area_id',
        'checked_by_id',
        'acknowladge_user_id',
        'spec_control',
        'pressure_control',
        'pressure_control_at',
        'pressure_control_expired_at',
        'checked_pressure_control',
        'notes',
        'expired_at',
        'apar_number',
        'apar_production',
        'apar_type',
        'apar_jenis',
        'apar_year_of_production',
    ];

    public function apar_area()
    {
        return $this->belongsTo(AparArea::class, 'area_id');
    }

    public function apar_condition()
    {
        return $this->hasMany(AparCondition::class, 'apar_report_id');
    }

    public function checked_by()
    {
        return $this->belongsTo(User::class, 'checked_by_id');
    }

    public function acknowladge_user()
    {
        return $this->belongsTo(User::class, 'acknowladge_user_id');
    }
}
