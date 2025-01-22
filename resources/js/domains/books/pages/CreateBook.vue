<script setup lang="ts">
import { ref } from 'vue'
import { addBook } from '../store';
import { router } from '../../../router';
import BookForm from '../components/BookForm.vue';
import { fetchAuthors } from '../../authors/store';
const newBook = ref({ author_id: "", title: "", plot: "" });

fetchAuthors();

const submitBook = async (book: any) => {

    await addBook(book);

    router.push('/');

}
</script>


<template>
    <BookForm :book="newBook" @bookSubmit="submitBook"></BookForm>

</template>