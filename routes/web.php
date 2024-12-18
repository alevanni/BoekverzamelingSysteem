<?php

use App\Http\Controllers\AuthorController;
use App\Http\Controllers\BookController;
use Illuminate\Support\Facades\Route;

Route::get('api/books', [BookController::class, 'index']);

Route::get('/', function () {
    return view('welcome');
}); //->where('any', '.*');
Route::get('api/authors', [AuthorController::class, 'index']);

Route::post('api/books/create', [BookController::class, 'store']);

Route::delete('api/books/{book}', [BookController::class, 'destroy']);
