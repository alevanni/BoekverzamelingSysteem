<script setup lang="ts">
import { getAllBooks } from '../store';
import BooksTable from '../components/BooksTable.vue';
import { getAllAuthors } from '../../authors/store';

getAllAuthors;

</script>

<template>
    <div class="component-vue-element">
        <h1>Hello, this is the overview of the books</h1>

        <BooksTable :books="getAllBooks"></BooksTable>
    </div>


</template>