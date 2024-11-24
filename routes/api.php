<?php

use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\UserController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});



// users resource 
Route::apiResource('/users', UserController::class)->withoutMiddleware(App\Http\Middleware\VerifyCsrfToken::class);


// authentication controller
Route::post('/login', [AuthenticationController::class, 'login'])->withoutMiddleware(\App\Http\Middleware\VerifyCsrfToken::class);
Route::middleware('auth:sanctum')->post('/logout', [AuthenticationController::class, 'logout'])->middleware('auth:sanctum');


