import BooksOverview from "./pages/BooksOverview.vue";
import EditBook from "./pages/EditBook.vue";
import CreateBook from "./pages/CreateBook.vue";
import ViewBook from "./pages/ViewBook.vue";
import { addRoutes } from "../../services/router";

export const bookRoutes = [
    { path: "/", name: "books", component: BooksOverview },

    { path: "/createbook", component: CreateBook },

    { path: "/editbook/:id", name: "editBook", component: EditBook },

    { path: "/viewbook/:id", name: "viewBook", component: ViewBook },
];
