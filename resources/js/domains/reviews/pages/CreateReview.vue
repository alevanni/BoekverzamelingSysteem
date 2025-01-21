<script setup lang="ts">
import { useRoute } from 'vue-router';
import { fetchBooks, getBookById } from '../../books/store';
import { router } from '../../../router';
import { fetchAuthors, getAuthorById } from '../../authors/store';
import { addReview } from '../../reviews/store';
import ReviewForm from '../components/ReviewForm.vue';
fetchBooks();
fetchAuthors();

const book = getBookById(+useRoute().params.bookid);
const review = { book_id: +useRoute().params.bookid, vote: 0, body: '' }

const submitReview = async (review: any) => {

    await addReview(review);

    router.push(`/viewbook/${review.book_id}`);


}
</script>

<template>

    <div class="book" v-if="book">
        <h2 class="title">{{ book.title }}</h2>
        <h2 class="author">Written by: {{ getAuthorById(book.id).value.name }}</h2>
        <p>{{ book.plot }}</p>
        <ReviewForm :review="review" @review-submit="submitReview"></ReviewForm>
    </div>

</template>