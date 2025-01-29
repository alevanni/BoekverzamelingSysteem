<script setup lang="ts">
import AuthorsTable from '../components/AuthorsTable.vue';
import { getAllAuthors } from '../../authors/store';

</script>


<template>
    <div class="component-vue-element">
        <h1>Hello, this is the overview of the authors</h1>
        <AuthorsTable :authors="getAllAuthors"></AuthorsTable>
    </div>

</template>
