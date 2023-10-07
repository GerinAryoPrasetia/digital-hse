<?php

namespace App\Models\Apar;

use App\Models\User;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AparCondition extends Model
{
    use HasFactory, HasUuids;

    protected $table = 'apar_condition';
    protected $primaryKey = 'id';
    public $timestamps = true;

    protected $fillable = [
        'pic_area_id',
        'apar_report_id',
        'apar_item_condition_id',
        'verified_by_hse',
        'verified_by_p2k',
        'year_checked',
        'month_checked',
        'hse_id',
        'p2k_id',
    ];

    public function pic_area()
    {
        return $this->belongsTo(User::class, 'pic_area_id');
    }

    public function apar_report()
    {
        return $this->belongsTo(AparReport::class, 'apar_report_id');
    }

    public function apar_item_condition()
    {
        return $this->belongsTo(AparItemCondition::class, 'apar_item_condition_id');
    }

    public function hse()
    {
        return $this->belongsTo(User::class, 'hse_id');
    }

    public function p2k()
    {
        return $this->belongsTo(User::class, 'p2k_id');
    }
}
