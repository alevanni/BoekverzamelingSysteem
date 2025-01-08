<script setup lang="ts">
import { useRoute } from 'vue-router';
import axios from 'axios';
import { ref, Ref } from 'vue';
import AuthorForm from '../components/AuthorForm.vue';
import { fetchAuthors, getAuthorById } from '../store';
fetchAuthors();

const authorToEdit = getAuthorById(+useRoute().params.id);


</script>

<template>
<h1>Edit author</h1>
<AuthorForm v-if="authorToEdit && authorToEdit.name != 'anonymous'" :author="authorToEdit" ></AuthorForm>
</template>