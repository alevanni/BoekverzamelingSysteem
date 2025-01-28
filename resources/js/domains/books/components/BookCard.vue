<script setup lang="ts">
import { deleteBook } from "../store";
import { Book } from "../../types";
import { getAuthorById } from "../../authors/store";
import { router, goToRoute } from "../../../services/router/index";

const props = defineProps<{ book: Book }>();

const removeBook = async (book: Book) => {
    await deleteBook(book.id);

    goToRoute("books");
};
</script>

<template>
    <RouterLink :to="{ name: 'viewBook', params: { id: book.id } }">
        <h2 class="title">{{ book.title }}</h2>
    </RouterLink>
    <h2 class="author">by: <span>{{ getAuthorById(book.author_id).value.name }} </span></h2>
    <p>
        {{ book.plot }}
    </p>
    <button class="delete" @click="removeBook(book)">Delete book</button>
    <RouterLink :to="{ name: 'editBook', params: { id: book.id } }">Edit book</RouterLink>
</template>
