<script setup lang="ts">

const props = defineProps(['books']);

</script>

<template>
<div class="card" v-for="book in books" :key="book.id">
    <h2 class="title">{{ book.title }}</h2>
    <h2 class="author">by: {{ book.author }}</h2>
    <p> {{ book.plot }}</p>
    <span class = "badge" :class="[(book.vote < 4)? 'bad' : ( (book.vote < 7)? 'meh': 'good'), (book.vote =='--')? 'to-review': '']"> Vote: {{ book.vote }}/10</span>
    
</div>
</template>