<?php

namespace App\Models\Apar;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AparItemCondition extends Model
{
    use HasFactory, HasUuids;

    protected $table = 'apar_item_condition';
    protected $primaryKey = 'id';
    public $timestamps = true;

    protected $fillable = [
        'apar_item_id',
        'apar_report_id',
        'checked',
        'condition',
        'status_remarks',
        'possible_cause',
        'tanggal_remarks',
    ];

    public function apar_item()
    {
        return $this->belongsTo(AparItem::class, 'apar_item_id');
    }

    public function apar_report()
    {
        return $this->belongsTo(AparReport::class, 'apar_report_id');
    }
}
