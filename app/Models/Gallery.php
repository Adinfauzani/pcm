<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

#[Fillable(['title', 'image_path', 'thumbnail', 'album_id', 'caption', 'order'])]
class Gallery extends Model
{
    use HasFactory, SoftDeletes;

    protected function casts(): array
    {
        return [
            'order' => 'integer',
        ];
    }

    public function album(): BelongsTo
    {
        return $this->belongsTo(Album::class, 'album_id');
    }
}