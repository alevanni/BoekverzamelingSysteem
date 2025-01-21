<script setup lang="ts">
import { ref, Ref } from 'vue';
import { router } from '../../../router';
import { addAuthor } from '../store';
import AuthorForm from '../components/AuthorForm.vue';
const newAuthor = ref({ name: "" });

const submitAuthor = async (author: any) => {
    await addAuthor(author);
    router.push('/authors');
}
</script>

<template>
    <h1>Create here a new author</h1>
    <AuthorForm :author="newAuthor" @authorSubmit="submitAuthor"></AuthorForm>

</template>