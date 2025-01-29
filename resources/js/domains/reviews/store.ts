import { computed } from "vue";
import { Review } from "../types";

import { storeModuleFactory } from "../../storeModuleFactory";
export const reviewStore = storeModuleFactory<Review>("reviews");

reviewStore.actions.getAll();

export const getAllReviews = reviewStore.getters.all;

export const getReviewById = reviewStore.getters.byId;

export const addReview = reviewStore.actions.create;

export const deleteReview = reviewStore.actions.deleteItemById;

export const updateReview = reviewStore.actions.updateItem;

export const getReviewsByBookId = (id: number) =>
    computed(() => getAllReviews.value.filter((review) => review.book_id == id));

