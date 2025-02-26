<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAuthorRequest;
use App\Http\Requests\UpdateAuthorRequest;
use Illuminate\Http\Request;
use App\Models\Author;
use App\Models\Book;
use App\Http\Resources\AuthorResource;

class AuthorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $authors = Author::all();

        return AuthorResource::collection($authors);
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
    public function store(StoreAuthorRequest $request)
    {
        $validated = $request->validated();
        Author::create($validated);
        $authors = Author::all();
        return AuthorResource::collection($authors);
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
    public function update(UpdateAuthorRequest $request, Author $author)
    {
        $validated = $request->validated();

        $author->update($validated);
        $authors = Author::all();
        return AuthorResource::collection($authors);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Author $author)
    {
        if ($author->id != 1) {
            Book::where('author_id', '=', $author->id)->update(['author_id' => 1]);
            $author->delete();
        }
        $authors = Author::all();
        return AuthorResource::collection($authors);
    }
}
