<?php

namespace App\Models\Apar;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AparItemRemarks extends Model
{
    use HasFactory, HasUuids;

    protected $table = 'apar_item_remarks';
    protected $primaryKey = 'id';
    public $timestamps = true;

    protected $fillable = [
        'apar_item_condition_id',
        'date',
        'status',
        'possible_cause',
    ];

    public function apar_item_condition()
    {
        return $this->belongsTo(AparItemCondition::class, 'apar_item_condition_id');
    }
}
