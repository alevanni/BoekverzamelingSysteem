<script setup lang="ts">
import { deleteReview } from "../store";
import { Review } from "../../types";
import { router, goToRoute } from "../../../services/router/index";
defineProps<{ review: Review }>();

const removeReview = async (review: Review) => {
    await deleteReview(review);

    goToRoute("viewBook", review.book_id);

}

</script>

<template>

    <h2 class=" badge title" :class="[(review.vote < 6) ? 'bad' : ((review.vote < 8) ? 'meh' : 'good')]">{{ review.vote
        }}</h2>


    <p>
        {{ review.body }}
    </p>
    <button class="delete" @click="removeReview(review)"> Delete review </button>
    <RouterLink class="edit" :to="{ name: 'editReview', params: { id: review.id } }">Edit Review</RouterLink>
</template>