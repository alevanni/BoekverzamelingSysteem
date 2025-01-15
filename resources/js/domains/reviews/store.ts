import { ref, computed } from "vue";
import axios from "axios";
import { Book, Review } from "../types";

const reviews = ref<Review[]>([]);

export const fetchReviews = async () => {
    const { data } = await axios.get("/api/reviews");
    if (!data) return;
    //console.log(data);
    reviews.value = data;
};

// GETTERS

export const getAllReviews = () => reviews.value;

export const getReviewById = (id: number) =>
    computed(() => reviews.value.find((review) => review.id == id));

export const getReviewsByBookId = (id: number) =>
    computed(() => reviews.value.filter((review) => review.book_id == id));

// ACTIONS

export const addReview = async (review: any) => {
    // axios post request here
    //console.log(review);
    const { data } = await axios.post(`/api/reviews/create/${review.book_id}`, review);
    if (!data) return;
    //console.log(data);
    reviews.value = data;
}