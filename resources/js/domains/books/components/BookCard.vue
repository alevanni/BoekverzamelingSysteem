<script setup lang="ts">
import { deleteBook } from '../store';
import { Book } from '../../types';
import { fetchAuthors, getAuthorById } from '../../authors/store';
import { router } from '../../../router';
import axios from 'axios';
import { Ref, ref } from 'vue';
const props = defineProps<{book: Book}>();
const errors: Ref<{}> = ref({});
//const vote: string = (props.book.vote < 0)? 'to-review' : ( props.book.vote < 4? 'bad' : ( props.book.vote <7? 'meh': 'good'));
//console.log(props.book);
/* 

*/
fetchAuthors();

const removeBook = async ( book: Book ) => {
    try {
         await deleteBook(book);
        
        
         router.push('/');
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            //console.log(error.response?.data.errors);
            errors.value = {...error.response?.data.errors};
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
    <ul class="errors">
        <li  v-for="(error, key) in errors">{{ key }}: 

            <li class="validation-error" v-for="item in error">{{ item }}</li>
        </li>
    </ul>
</template>