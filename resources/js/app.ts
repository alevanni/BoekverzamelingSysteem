import { createApp } from "vue";
import App from "./App.vue";
import { addRoutes, router } from "./services/router/index";
import { bookRoutes } from "./domains/books/routes";
import { authorRoutes } from "./domains/authors/route";
import { reviewRoutes } from "./domains/reviews/routes";

const app = createApp(App);


addRoutes(bookRoutes);
addRoutes(authorRoutes);
addRoutes(reviewRoutes);

app.use(router)


app.mount("#app");
