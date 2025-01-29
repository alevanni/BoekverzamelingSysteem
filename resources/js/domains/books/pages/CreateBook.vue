<script setup lang="ts">
import { ref } from 'vue'
import { addBook } from '../store';
import { goToRoute } from "../../../services/router/index";
import BookForm from '../components/BookForm.vue';

const newBook = ref({ author_id: "", title: "", plot: "" });

const submitBook = async (book: any) => {

    await addBook(book);

    goToRoute("books");

}
</script>


<template>
    <BookForm :book="newBook" @bookSubmit="submitBook"></BookForm>

</template>