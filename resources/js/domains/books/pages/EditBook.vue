<script setup lang="ts">
import { useRoute } from 'vue-router';
import BookForm from '../components/BookForm.vue';
import { getBookById, updateBook } from '../store';
import { Book } from '../../types';
import { goToRoute } from "../../../services/router/index";

const bookToEdit = getBookById(+useRoute().params.id);


const editBook = async (book: Book) => {

    await updateBook(book);
    goToRoute("books");

}
</script>

<template>
    <BookForm v-if="bookToEdit" :book="bookToEdit" @book-submit="editBook"></BookForm>
</template>