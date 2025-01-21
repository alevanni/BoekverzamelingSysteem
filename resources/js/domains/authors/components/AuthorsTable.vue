<script setup lang="ts">
import AuthorCard from './AuthorCard.vue';
defineProps(['authors']);

</script>

<template>
    <div class="table">
        <div class="card" v-for="author in authors" :key="author.id">
            <AuthorCard :author="author"></AuthorCard>
        </div>
    </div>
</template>