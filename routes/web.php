<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return inertia('Users/UserDashboard');
});


Route::get('/users', function () {
    return Inertia::render('Users/User');
});

// Route::get('/about', function () {
//     return Inertia::render('About/AboutUs');


// });

Route::apiResource('/users', UserController::class)->withoutMiddleware(App\Http\Middleware\VerifyCsrfToken::class);

Route::inertia('/nav', 'Navbar/Nav');
Route::inertia('/f', 'Footer/Footer');
Route::inertia('/about', 'About/AboutUs', ['data' => 'welcome']);
