<script setup lang="ts">
import { /*fetchBooks,*/ getAllBooks } from '../store';
import BooksTable from '../components/BooksTable.vue';
import { getAllAuthors } from '../../authors/store';


//fetchBooks();
//fetchAuthors();

</script>

<template>
    <div class="component-vue-element">
        <h1>Hello, this is the overview of the books</h1>

        <BooksTable :books="getAllBooks"></BooksTable>
    </div>


</template>