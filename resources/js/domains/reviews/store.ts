import { ref, reactive, computed } from "vue";
import axios from "axios";
import { Book, Author, Review } from "../types";

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
