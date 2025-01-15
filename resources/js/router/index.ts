import { createWebHistory, createRouter } from "vue-router";
import BooksOverview from "../domains/books/pages/BooksOverview.vue";
import EditBook from "../domains/books/pages/EditBook.vue";
import CreateBook from "../domains/books/pages/CreateBook.vue";
import AuthorsOverview from "../domains/authors/pages/AuthorsOverview.vue";
import CreateAuthor from "../domains/authors/pages/CreateAuthor.vue";
import EditAuthor from "../domains/authors/pages/EditAuthor.vue";
import ViewBook from "../domains/books/pages/ViewBook.vue";
import CreateReview from "../domains/reviews/pages/CreateReview.vue";
import EditReview from "../domains/reviews/pages/EditReview.vue";

const routes = [
    { path: "/", component: BooksOverview },
    { path: "/authors", component: AuthorsOverview },
    { path: "/createbook", component: CreateBook },
    { path: "/createauthor", component: CreateAuthor },
    { path: "/createreview/:bookid", name: "createReview", component: CreateReview },
    { path: "/editbook/:id", name: "editBook", component: EditBook },
    { path: "/editauthor/:id", name: "editAuthor", component: EditAuthor },
    { path: "/editreview/:id", name: "editReview", component: EditReview },
    { path: "/viewbook/:id", name: "viewBook", component: ViewBook },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export { router };
