<script setup lang="ts">
import { ref } from 'vue';
import { getAllBooks, fetchBooks } from '../store.js';
import BooksTable from './Partials/BooksTable.vue';
fetchBooks();

</script>

<template>
    <h1 class="component-vue-element">Hello, this is the overview of the books</h1>
    
    <BooksTable :books="getAllBooks()"></BooksTable>
    
</template>