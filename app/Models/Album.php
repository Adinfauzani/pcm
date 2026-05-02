<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

#[Fillable(['name', 'slug', 'description', 'cover_image'])]
class Album extends Model
{
    use HasFactory, SoftDeletes;

    protected function casts(): array
    {
        return [];
    }

    public function images(): HasMany
    {
        return $this->hasMany(Gallery::class, 'album_id')->orderBy('order');
    }
}