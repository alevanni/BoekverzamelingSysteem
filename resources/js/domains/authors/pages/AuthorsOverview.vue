<script setup lang="ts">
import AuthorsTable from '../components/AuthorsTable.vue';
import { fetchAuthors, getAllAuthors } from '../../authors/store';
fetchAuthors();
</script>


<template>
    <div class="component-vue-element">
        <h1>Hello, this is the overview of the authors</h1>
        <AuthorsTable :authors="getAllAuthors()"></AuthorsTable>
    </div>

</template>
