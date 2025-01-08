<script setup lang="ts">
import { ref } from 'vue';
import { fetchBooks, getAllBooks } from '../store';
import BooksTable from '../components/BooksTable.vue';
import { fetchAuthors } from '../../authors/store';


fetchBooks();
fetchAuthors();

</script>

<template>
    <h1 class="component-vue-element">Hello, this is the overview of the books</h1>
    
    <BooksTable :books="getAllBooks()"></BooksTable>
    
</template>