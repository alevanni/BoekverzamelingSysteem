<script setup lang="ts">
import { useRoute } from 'vue-router';
import { fetchBooks } from '../../books/store';
import { Review } from '../../types';
import { router } from '../../../router';
import { fetchAuthors } from '../../authors/store';
import { fetchReviews, getReviewById, updateReview } from '../../reviews/store';
import ReviewForm from '../components/ReviewForm.vue';
fetchBooks();
fetchAuthors();
fetchReviews();

const reviewToEdit = getReviewById(+useRoute().params.id);

const editReview = async (review: Review) => {

    await updateReview(review);
    router.push(`/viewbook/${review.book_id}`);


}
</script>
<template>
    <h1>Edit review</h1>
    <ReviewForm v-if="reviewToEdit" :review="reviewToEdit" @review-submit="editReview">
    </ReviewForm>

</template>