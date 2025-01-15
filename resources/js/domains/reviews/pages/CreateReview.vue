<script setup lang="ts">
import { useRoute } from 'vue-router';
import ReviewTable from '../../reviews/components/ReviewTable.vue';
import { fetchBooks, getBookById } from '../../books/store';
import { Book } from '../../types';
import { router } from '../../../router';
import axios from 'axios';
import { ref, Ref } from 'vue';
import { fetchAuthors, getAuthorById } from '../../authors/store';
import { fetchReviews, getReviewsByBookId, getAllReviews, addReview } from '../../reviews/store';
import ReviewForm from '../components/ReviewForm.vue';
fetchBooks();
fetchAuthors();

const book = getBookById(+useRoute().params.bookid);
const review = {book_id:+useRoute().params.bookid, vote: 0, body: '' }
const errors: Ref<{}> = ref({});

const submitReview = async (review: any) => {
    try {
         await addReview(review);
        
         router.push(`/viewbook/${review.book_id}`);
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            //console.log(error.response?.data.errors);
            errors.value = {...error.response?.data.errors};
            //console.log(errors);
        }
       
        
    }
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