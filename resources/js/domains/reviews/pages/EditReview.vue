<script setup lang="ts">
import { useRoute } from 'vue-router';
import { Review } from '../../types';
import { goToRoute } from "../../../services/router/index";
import { getReviewById, updateReview } from '../../reviews/store';
import ReviewForm from '../components/ReviewForm.vue';

const reviewToEdit = getReviewById(+useRoute().params.id);

const editReview = async (review: Review) => {

    await updateReview(review);
    goToRoute("viewBook", review.book_id);


}
</script>
<template>
    <h1>Edit review</h1>
    <ReviewForm v-if="reviewToEdit" :review="reviewToEdit" @review-submit="editReview">
    </ReviewForm>

</template>