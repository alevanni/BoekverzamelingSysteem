<?php

use App\Http\Controllers\AuthorController;
use App\Http\Controllers\BookController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// GET REQUESTS
Route::get('authors', [AuthorController::class, 'index']);
Route::get('books', [BookController::class, 'index']);

// POST REQUESTS
Route::post('books/create', [BookController::class, 'store']);
Route::post('authors/create', [AuthorController::class, 'store']);

Route::delete('books/{book}', [BookController::class, 'destroy']);
Route::put('books/{book}', [BookController::class, 'update']);
