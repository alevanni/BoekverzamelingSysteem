<script setup lang="ts">
import { useRoute } from 'vue-router';
import { Author } from '../../types';
import { router, goToRoute } from "../../../services/router/index";
import AuthorForm from '../components/AuthorForm.vue';
import { fetchAuthors, getAuthorById, updateAuthor } from '../store';

fetchAuthors();

const authorToEdit = getAuthorById(+useRoute().params.id);

const editAuthor = async (author: Author) => {

    await updateAuthor(author);
    goToRoute("authors");

}

</script>

<template>
    <h1>Edit author</h1>
    <AuthorForm v-if="authorToEdit && authorToEdit.name != 'Anonymous'" :author="authorToEdit"
        @author-submit="editAuthor"></AuthorForm>
    <p v-if="authorToEdit.name == 'Anonymous'">You cannot edit the placeholder author</p>

</template>