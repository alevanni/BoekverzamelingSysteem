<?php

use App\Http\Controllers\BookController;
use Illuminate\Support\Facades\Route;

Route::get('api/books', [BookController::class, 'index']);

Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');
