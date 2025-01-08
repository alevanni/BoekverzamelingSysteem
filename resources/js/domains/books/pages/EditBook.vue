<script setup lang="ts">
import { useRoute } from 'vue-router';
import BookForm from '../components/BookForm.vue';
import { fetchBooks, getBookById, updateBook } from '../store';
import { Book } from '../../types';
import { router } from '../../../router';
import axios from 'axios';
import { ref, Ref } from 'vue';
import { fetchAuthors } from '../../authors/store';

fetchBooks();
fetchAuthors();

const bookToEdit = getBookById(+useRoute().params.id);


const errors = ref<Ref<{}>>();

const editBook = async ( book: Book ) => {
    try {
         await updateBook(book);
         router.push('/');
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            //console.log(error.response?.data.errors);
            errors.value = {...error.response?.data.errors};
            //console.log(errors);
        }
       
        
    }
}
</script>

<template>
    <BookForm v-if="bookToEdit" :book="bookToEdit" @book-submit="editBook"></BookForm>
</template>