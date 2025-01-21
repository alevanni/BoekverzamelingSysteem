<script setup lang="ts">
import { Author } from '../../types';
import { fetchAuthors, getAuthorById, deleteAuthor } from '../store';
import { router } from '../../../router/index';

const props = defineProps<{ author: Author }>();

const removeAuthor = async (author: Author) => {

    await deleteAuthor(author);
    console.log('success');
    router.go(0);

}


</script>

<template>
    <h2 class="author">{{ author.name }}</h2>
    <button class="delete" @click="removeAuthor(author)"> Delete author </button>
    <RouterLink :to="{ name: 'editAuthor', params: { id: author.id } }">Edit Author</RouterLink>

</template>