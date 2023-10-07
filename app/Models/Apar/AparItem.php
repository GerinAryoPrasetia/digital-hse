<?php

namespace App\Models\Apar;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AparItem extends Model
{
    use HasFactory, HasUuids;

    protected $table = 'apar_item';

    public function apar_item_condition()
    {
        return $this->hasMany(AparItemCondition::class, 'apar_item_id');
    }
}
