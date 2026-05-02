<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

#[Fillable(['name', 'position', 'position_level', 'photo', 'bio', 'phone', 'email', 'order', 'is_active', 'period_start', 'period_end'])]
class Member extends Model
{
    use HasFactory, SoftDeletes;

    protected function casts(): array
    {
        return [
            'is_active' => 'boolean',
            'order' => 'integer',
            'position_level' => 'integer',
            'period_start' => 'date',
            'period_end' => 'date',
        ];
    }

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }
}