<script setup lang="ts">
import AuthorsTable from '../components/AuthorsTable.vue';
import { fetchAuthors, getAllAuthors } from '../../authors/store';
fetchAuthors();
</script>


<template>
    <h1 class="component-vue-element">Hello, this is the overview of the authors</h1>
    <AuthorsTable :authors="getAllAuthors()"></AuthorsTable>
</template>
