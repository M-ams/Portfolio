<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestController extends Controller
{
    public function getMethod()
    {
        return response()->json([
            'name' => 'Abigail',
            'state' => 'CA'
        ]);

    }
}
