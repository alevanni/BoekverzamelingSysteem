<?php

use App\Http\Controllers\AuthorController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\ReviewController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// GET REQUESTS
Route::get('authors', [AuthorController::class, 'index']);
Route::get('books', [BookController::class, 'index']);
Route::get('reviews', [ReviewController::class, 'index']);

// POST REQUESTS
Route::post('books', [BookController::class, 'store']);
Route::post('authors/create', [AuthorController::class, 'store']);
Route::post('reviews/create', [ReviewController::class, 'store']);


// DELETE REQUESTS
Route::delete('books/{book}', [BookController::class, 'destroy']);
Route::delete('authors/{author}', [AuthorController::class, 'destroy']);
Route::delete('reviews/{review}', [ReviewController::class, 'destroy']);

// PUT REQUESTS
Route::put('books/{book}', [BookController::class, 'update']);
Route::put('authors/{author}', [AuthorController::class, 'update']);
Route::put('reviews/{review}', [ReviewController::class, 'update']);
