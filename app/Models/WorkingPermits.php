<?php

namespace App\Models;

use App\Models\WP\NatureOfWork;
use App\Models\WP\SafetyEquipment;
use App\Models\WP\SafetyPersonal;
use App\Models\WP\SafetyProcedure;
use App\Models\WP\WpAttachments;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WorkingPermits extends Model
{
    use HasFactory, HasUuids;

    protected $table = 'working_permits';
    protected $primaryKey = 'id';
    public $timestamps = true;

    protected $fillable = [
        'permit_number',
        'issuer_id',
        'supervisor_id',
        'officer_id',
        'permit_to_work',
        'equipment_to_work',
        'brief_of_work',
        'remarks',
        'work_site',
        'additional_comments',
        'start_date',
        'end_date',
        'is_approved_first_step',
        'is_approved_second_step',
        'is_done_by_supervisor',
        'is_done_by_officer',
        'first_approved_at',
        'second_approved_at',
        'is_rejected',
        'status',
        'created_at',
        'updated_at',
    ];

    public function issuer()
    {
        return $this->belongsTo(User::class, 'issuer_id');
    }

    public function supervisor()
    {
        return $this->belongsTo(User::class, 'supervisor_id');
    }

    public function officer()
    {
        return $this->belongsTo(User::class, 'officer_id');
    }

    public function natureOfWork()
    {
        return $this->hasMany(NatureOfWork::class, 'working_permit_id');
    }

    public function safetyEquipment()
    {
        return $this->hasMany(SafetyEquipment::class, 'working_permit_id');
    }

    public function safetyProcedure()
    {
        return $this->hasMany(SafetyProcedure::class, 'working_permit_id');
    }

    public function safetyPersonal()
    {
        return $this->hasMany(SafetyPersonal::class, 'working_permit_id');
    }

    public function attachments()
    {
        return $this->hasMany(WpAttachments::class, 'working_permit_id');
    }
}
