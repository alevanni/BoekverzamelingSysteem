import { addRoutes } from "../../services/router";
import CreateReview from "./pages/CreateReview.vue";
import EditReview from "./pages/EditReview.vue";

export const reviewRoutes = [
    {
        path: "/createreview/:bookid",
        name: "createReview",
        component: CreateReview,
    },

    { path: "/editreview/:id", name: "editReview", component: EditReview },
];
