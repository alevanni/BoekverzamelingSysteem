<script setup lang="ts">
import BookCard from './BookCard.vue';
defineProps(['books']);

</script>

<template>
<div class="card" v-for="book in books" :key="book.id">
    <BookCard :book="book"></BookCard>
    
</div>
</template>