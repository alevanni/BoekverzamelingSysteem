<?php

use App\Http\Controllers\BookController;
use App\Http\Controllers\AuthorController;
use Illuminate\Support\Facades\Route;

Route::get('api/books', [BookController::class, 'index']);

Route::get('api/authors', [AuthorController::class, 'index']);

Route::post('api/books/create', [BookController::class, 'store']);

Route::delete('api/books/{id}', [BookController::class, 'destroy']);

Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');
