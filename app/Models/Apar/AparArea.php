<?php

namespace App\Models\Apar;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AparArea extends Model
{
    use HasFactory, HasUuids;

    protected $table = 'apar_area';

    public function apar_report()
    {
        return $this->hasMany(AparReport::class, 'apar_area_id');
    }
}
