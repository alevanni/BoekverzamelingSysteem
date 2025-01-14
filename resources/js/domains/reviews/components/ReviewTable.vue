<script setup lang="ts">
import ReviewCard from './ReviewCard.vue';
const reviews = defineProps(['reviews']);

</script>

<template>
    <div class="card" v-for="review in reviews" :key="review.id">
        <ReviewCard :review="review"></ReviewCard>

    </div>
</template>