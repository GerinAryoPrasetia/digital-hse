<?php

namespace App\Models\Accident;

use App\Models\User;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Accident extends Model
{
    use HasFactory, HasUuids;

    protected $table = 'accident';
    protected $primaryKey = 'id';
    public $timestamps = true;

    protected $fillable = [
        'supervisor_id',
        'divisi',
        'departement',
        'seksi',
        'waktu_kejaidan',
        'waktu_lapor',
        'lokasi',
        'jam_mulai_kerja',
        'jam_selesai_kerja',
        'nama_pengawas_kerja',
        'uraian_kejadian',
        'kerugian',
        'level_category',
        'leader_id',
        'hod_id',
        'hse_coor_id',
        'chairman_id',
        'is_closed',
        'closed_by',
        'approved_by_leader',
        'approved_by_hod',
        'approved_by_hse_coor',
        'approved_by_chairman',
    ];

    public function accidentClassification()
    {
        return $this->hasMany(AccidnetClassification::class, 'accident_id', 'id');
    }

    public function accidentCausesAnalysis()
    {
        return $this->hasMany(AccidentCausesAnalysis::class, 'accident_id', 'id');
    }

    public function accidentRecommendation()
    {
        return $this->hasMany(AccidentRecommendatin::class, 'accident_id', 'id');
    }

    public function supervisor()
    {
        return $this->belongsTo(User::class, 'supervisor_id');
    }

    public function leader()
    {
        return $this->belongsTo(User::class, 'leader_id');
    }

    public function hod()
    {
        return $this->belongsTo(User::class, 'hod_id');
    }

    public function hse_coor()
    {
        return $this->belongsTo(User::class, 'hse_coor_id');
    }

    public function chairman()
    {
        return $this->belongsTo(User::class, 'chairman_id');
    }

    public function accidentInjuredPerson()
    {
        return $this->hasMany(AccidentInjuredPerson::class, 'accident_id', 'id');
    }
}
