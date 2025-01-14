<script setup lang="ts">
import { useRoute } from 'vue-router';
import ReviewTable from '../../reviews/components/ReviewTable.vue';
import { fetchBooks, getBookById, updateBook } from '../store';
import { Book } from '../../types';
import { router } from '../../../router';
import axios from 'axios';
import { ref, Ref } from 'vue';
import { fetchAuthors, getAuthorById } from '../../authors/store';
import { fetchReviews, getReviewsByBookId } from '../../reviews/store';
fetchBooks();
fetchAuthors();
fetchReviews();
const book = getBookById(+useRoute().params.id);

//const reviews = getReviewsByBookId(book.value.id);

</script>

<template>
    <div class="book" v-if="book">
        <h2 class="title">{{ book.title }}</h2>
        <h2 class="author">{{ getAuthorById(book.id).value.name }}</h2>
        <p>{{ book.plot }}</p>
        <ReviewTable v-if="getReviewsByBookId(book.id)" :reviews="getReviewsByBookId(book.id)">
        </ReviewTable>
    </div>

</template>