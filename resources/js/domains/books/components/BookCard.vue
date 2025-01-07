<script setup lang="ts">
import { deleteBook } from '../store';
import { Book } from '../../types';
import { fetchAuthors, getAuthorById } from '../../authors/store';
import { router } from '../../../router/index';
import axios from 'axios';
import { Ref, ref } from 'vue';
const props = defineProps<{book: Book}>();
const errors: Ref<string> = ref('');
//const vote: string = (props.book.vote < 0)? 'to-review' : ( props.book.vote < 4? 'bad' : ( props.book.vote <7? 'meh': 'good'));
//console.log(props.book);
/* 

*/


const removeBook = async ( book: Book ) => {
    try {
         await deleteBook(book);
         console.log('success');
         router.go(0);
    }
    catch (error) { // this does not work but i don't know how to test it
        if (axios.isAxiosError(error)) {
            //console.log(error.response?.data.errors);
            errors.value = error.message;
            console.log(errors);
        }
       
        
    }
}

</script>


<template>
<h2 class="title">{{ book.title }}</h2>
     <h2 class="author">by: {{ (  getAuthorById(book.author_id).value.name  ) }}</h2> 
    <p> {{ book.plot }}
    <!-- <span class = "badge" :class="vote"> Vote: {{ book.vote }}/10</span>   --> </p>
    <button class="delete" @click="removeBook(book)"> Delete book </button>
    <RouterLink :to="{name: 'editBook', params: { id: book.id }}">Edit a book</RouterLink>
    <p class="validation-error">{{ errors }}</p>
</template>