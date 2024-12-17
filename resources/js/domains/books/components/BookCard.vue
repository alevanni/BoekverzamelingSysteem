<script setup lang="ts">
import { deleteBook } from '../store';
const props = defineProps(['book']);

</script>


<template>
<h2 class="title">{{ book.title }}</h2>
    <h2 class="author">by: {{ book.author }}</h2>
    <p> {{ book.plot }}
    <span class = "badge" :class="[(book.vote < 4)? 'bad' : ( (book.vote < 7)? 'meh': 'good'), (book.vote =='--')? 'to-review': '']"> Vote: {{ book.vote }}/10</span> </p>
    <button class="delete" @onClick="deleteBook(book.id)"> Delete book </button>
</template>