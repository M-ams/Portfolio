<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Works extends Model
{
    

    protected $fillable = [
        'title',
        'description',
        'description_en',
        'image',
        'link',

    ];

    public function stacks()
    {
        return $this->hasMany(Stack::class);
    }
}
