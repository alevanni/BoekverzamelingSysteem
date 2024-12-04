import { createMemoryHistory, createRouter } from 'vue-router'
import Overview from '../domains/books/pages/Overview.vue'
import EditBook from '../domains/books/pages/EditBook.vue'

const routes = [
    { path: '/', component: Overview },
    { path: '/editbook', component: EditBook },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export { router }