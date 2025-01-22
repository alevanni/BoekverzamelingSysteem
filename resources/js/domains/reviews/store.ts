import { ref, computed } from "vue";
import axios from "axios";
import { Review } from "../types";

const reviews = ref<Review[]>([]);

export const fetchReviews = async () => {
    const { data } = await axios.get("/api/reviews");
    if (!data) return;

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
    const { data } = await axios.post("/api/reviews/create/", review);
    if (!data) return;

    reviews.value = data;
};

export const deleteReview = async (review: Review) => {
    // axios delete request here
    const { data } = await axios.delete(`/api/reviews/${review.id}`);
    if (!data) return;

    reviews.value = data;
};

export const updateReview = async (reviewToEdit: Review) => {
    // axios put request here
    const { data } = await axios.put(
        `/api/reviews/${reviewToEdit.id}`,
        reviewToEdit
    );
    if (!data) return;

    reviews.value = data;
};
