<script setup lang="ts">
import { ref, Ref } from 'vue';
import { router, goToRoute } from "../../../services/router/index";
import { addAuthor } from '../store';
import AuthorForm from '../components/AuthorForm.vue';
const newAuthor = ref({ name: "" });

const submitAuthor = async (author: any) => {
    await addAuthor(author);
    goToRoute("authors");
}
</script>

<template>
    <h1>Create here a new author</h1>
    <AuthorForm :author="newAuthor" @authorSubmit="submitAuthor"></AuthorForm>

</template>