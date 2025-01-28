<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBookRequest;
use App\Http\Requests\UpdateBookRequest;
use Illuminate\Http\Request;
use App\Models\Book;
use App\Http\Resources\BookResource;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $books = Book::orderBy('created_at', 'desc')->get();
        return BookResource::collection($books);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBookRequest $request)
    {
        $validated = $request->validated();
        Book::create($validated);

        $books = Book::orderBy('created_at', 'desc')->get();

        return BookResource::collection($books);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBookRequest $request, Book $book)
    {
        $validated = $request->validated();

        $book->update($validated);

        $books = Book::orderBy('created_at', 'desc')->get();

        return BookResource::collection($books);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $book = Book::find($id);
        if ($book) {
            $book->delete();
        }

        $books = Book::with('reviews')->orderBy('created_at', 'desc')->get();
        return BookResource::collection($books);
    }
}
