<?php

use App\Models\Works;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

//Authentication

Route::post('/register', 'App\Http\Controllers\AuthenticationController@register');
Route::post('/login', 'App\Http\Controllers\AuthenticationController@login');


Route::get('/users', 'App\Http\Controllers\TestController@getMethod');

Route::post('/works-create', 'App\Http\Controllers\WorksController@store')->middleware('App\Http\Middleware\React');
Route::get('/works', 'App\Http\Controllers\WorksController@index');
Route::get('/works/{id}/edit', 'App\Http\Controllers\WorksController@edit');
Route::put('/works/{id}', 'App\Http\Controllers\WorksController@update');
Route::delete('/works/{id}', 'App\Http\Controllers\WorksController@destroy');

