<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stack extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'works_id',
    ];

    public function works()
    {
        return $this->belongsTo(Works::class);
    }
}
