<script setup lang="ts">
import { useRoute } from 'vue-router';
import BookForm from '../components/BookForm.vue';
import { /*fetchBooks,*/ getBookById, updateBook } from '../store';
import { Book } from '../../types';
import { router, goToRoute } from "../../../services/router/index";
import { fetchAuthors } from '../../authors/store';

//fetchBooks();
fetchAuthors();

const bookToEdit = getBookById(+useRoute().params.id);


const editBook = async (book: Book) => {

    await updateBook(book);
    goToRoute("books");

}
</script>

<template>
    <BookForm v-if="bookToEdit" :book="bookToEdit" @book-submit="editBook"></BookForm>
</template>