<script setup lang="ts">
import { ref } from 'vue';
import { getAllBooks } from '../store';
import BooksTable from '../components/BooksTable.vue';


</script>

<template>
    <h1 class="component-vue-element">Hello, this is the overview of the books</h1>
    
    <BooksTable :books="getAllBooks()"></BooksTable>
    
</template>