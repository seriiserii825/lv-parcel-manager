<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\StyleGuideController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::group(['middleware' => ['auth']], function () {
    Route::get('/admin', [AdminController::class, 'index'])->name('admin');
    Route::get('/admin/style-guide', [StyleGuideController::class, 'index'])->name('admin.style-guide');
    Route::get('/admin/style-guide/button', [StyleGuideController::class, 'button'])->name('admin.style-guide.button');
});

include __DIR__ . '/auth.php';
