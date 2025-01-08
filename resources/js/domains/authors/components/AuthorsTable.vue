<script setup lang="ts">
import AuthorCard from './AuthorCard.vue';
defineProps(['authors']);

</script>

<template>
<div class="card" v-for="author in authors" :key="author.id">
    <AuthorCard :author="author"></AuthorCard>
    
</div>
</template>