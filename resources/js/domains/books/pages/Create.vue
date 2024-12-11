<script setup lang="ts">
import { ref }  from 'vue'
import { fetchAuthors } from '../store';

import Form from '../components/Form.vue';
const newBook = ref({title: "", plot: "" });

</script>

<template>
    <Form :book="newBook"></Form>
</template>