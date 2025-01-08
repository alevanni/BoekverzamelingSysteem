<script setup lang="ts">
import { deleteBook } from '../store';
import { Book } from '../../types';
import { fetchAuthors, getAuthorById } from '../../authors/store';
import { router } from '../../../router/index';
import axios from 'axios';
import { Ref, ref } from 'vue';
const props = defineProps<{book: Book}>();


const removeBook = async ( book: Book ) => {
    
         await deleteBook(book);
         console.log('success');
         router.go(0);
    
}

</script>


<template>
<h2 class="title">{{ book.title }}</h2>
     <h2 class="author">by: {{ (  getAuthorById(book.author_id).value.name  ) }}</h2> 
    <p> {{ book.plot }}
    <!-- <span class = "badge" :class="vote"> Vote: {{ book.vote }}/10</span>   --> </p>
    <button class="delete" @click="removeBook(book)"> Delete book </button>
    <RouterLink :to="{name: 'editBook', params: { id: book.id }}">Edit book</RouterLink>
    
</template>