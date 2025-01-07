<script setup lang="ts">
import { getAllBooks, fetchBooks } from './domains/books/store';
import { fetchAuthors } from './domains/authors/store';
fetchBooks();
fetchAuthors();
</script>

<template>
    <nav class="app-vue-element">
    <RouterLink to="/">Overview of books</RouterLink>
    
    <RouterLink to="/createbook">Create a new book</RouterLink>
</nav>
    <h1 class="app-vue-element">Hello World! Book collection system</h1>
    <main>
    <RouterView />
  </main>
</template>