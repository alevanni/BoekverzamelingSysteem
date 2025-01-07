<script setup lang="ts">
import { useRoute } from 'vue-router';
import Form from '../components/Form.vue';
import { getBookById, updateBook } from '../store';
import { Book } from '../../types';
import { router } from '../../../router';
import axios from 'axios';
import { ref, Ref } from 'vue';
const bookToEdit = ref(getBookById(+useRoute().params.id));
const errors: Ref<{}> = ref({});


const editBook = async ( book: Book ) => {
    try {
         await updateBook(book);
         router.go(0);
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
    <Form :book="bookToEdit" @book-submit="editBook"></Form>
</template>