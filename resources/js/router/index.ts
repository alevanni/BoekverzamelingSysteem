import { createWebHistory, createRouter } from 'vue-router'
import Overview from '../domains/books/pages/Overview.vue'
import EditBook from '../domains/books/pages/EditBook.vue'
import Create from '../domains/books/pages/Create.vue'

const routes = [
    { path: '/', component: Overview },
    { path: '/createbook', component: Create },
    { path: '/editbook/:id', name: 'editBook', component: EditBook },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export { router }