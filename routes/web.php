<?php

use App\Http\Controllers\LatihanController;
use App\Models\Latihan;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
Route::controller(LatihanController::class)->group(function(){
    Route::get('data-mahasiswa', 'index')->name('index');
    Route::get('create', 'create')->name('create');
    Route::post('/add-data-mahasiswa', 'store');
    Route::delete('/delete/{id}', 'destroy')->name('destroy');
    Route::get('edit/{id}', 'edit');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';
