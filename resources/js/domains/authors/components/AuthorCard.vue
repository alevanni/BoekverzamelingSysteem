<script setup lang="ts">
import { Author } from '../../types';
import { deleteAuthor } from '../store';
import { goToRoute } from "../../../services/router/index";

const props = defineProps<{ author: Author }>();

const removeAuthor = async (author: Author) => {

    await deleteAuthor(author.id);

    goToRoute("authors");

}


</script>

<template>
    <h2 class="author">{{ author.name }}</h2>
    <button class="delete" @click="removeAuthor(author)"> Delete author </button>
    <RouterLink :to="{ name: 'editAuthor', params: { id: author.id } }">Edit Author</RouterLink>

</template>