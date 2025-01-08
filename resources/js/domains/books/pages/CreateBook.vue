<script setup lang="ts">
import { ref }  from 'vue'
import type { Ref } from 'vue'
import axios from 'axios';
import { addBook } from '../store';
import { router } from '../../../router';
import Form from '../components/BookForm.vue';
const newBook = ref({author_id:"", title: "", plot: "" });
const errors: Ref<{}> = ref({});


const submitBook = async ( book: any ) => {
    try {
         await addBook(book);
        
        
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
    <Form :book="newBook" @book-submit="submitBook"></Form>
    <ul class="errors">
        <li  v-for="(error, key) in errors">{{ key }}: 

            <li class="validation-error" v-for="item in error">{{ item }}</li>
        </li>
    </ul>
</template>