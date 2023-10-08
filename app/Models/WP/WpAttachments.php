<?php

namespace App\Models\WP;

use App\Models\WorkingPermits;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WpAttachments extends Model
{
    use HasFactory, HasUuids;
    protected $table = 'wp_attachments';
    protected $primaryKey = 'id';
    public $timestamps = true;

    protected $fillable = [
        'working_permit_id',
        'attachment_name',
        'attachment_path',
        'attachment_type'
    ];

    public function workingPermit()
    {
        return $this->belongsTo(WorkingPermits::class, 'working_permit_id');
    }
}
