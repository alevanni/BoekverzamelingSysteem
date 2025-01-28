import AuthorsOverview from "./pages/AuthorsOverview.vue";
import CreateAuthor from "./pages/CreateAuthor.vue";
import EditAuthor from "./pages/EditAuthor.vue";

export const authorRoutes = [
    { path: "/authors", name: "authors", component: AuthorsOverview },
    { path: "/createauthor", component: CreateAuthor },
    { path: "/editauthor/:id", name: "editAuthor", component: EditAuthor },
];
