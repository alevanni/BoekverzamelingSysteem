<script setup lang="ts">
import { useRoute } from 'vue-router';
import ReviewTable from '../../reviews/components/ReviewTable.vue';
import { getBookById } from '../store';
import { getAuthorById } from '../../authors/store';
import { getReviewsByBookId } from '../../reviews/store';

const book = getBookById(+useRoute().params.id);

</script>

<template>
    <div class="book" v-if="book">
        <h2 class="title">{{ book.title }}</h2>
        <h2 class="author">Written by: {{ getAuthorById(book.author_id).value?.name }}</h2>
        <p>{{ book.plot }}</p>
        <RouterLink :to="{ name: 'createReview', params: { bookid: book.id } }">Add a new review</RouterLink>
        <ReviewTable :reviews="getReviewsByBookId(book.id).value">
        </ReviewTable>
    </div>

</template>