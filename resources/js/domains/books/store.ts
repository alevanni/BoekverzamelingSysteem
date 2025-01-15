import { ref, computed } from 'vue';
import axios from 'axios';
import { Book } from '../types';

const books = ref<Book[]>([]);



// The function that asks the backend for the books. 
// How? With a get request on the route get('api/books'). This will call the controller according to the file
// web.php (the laravel routing). The controller will not return a view (this is vue's job), just the data.

export const fetchBooks = async () => {
    const { data } = await axios.get('/api/books');
    if (!data) return;
    //console.log('fetchbooks');
    books.value = data;
}


// GETTERS
export const getAllBooks = () => books.value;

export const getBookById = (id: number) => computed(() => books.value.find(book => book.id == id));
// ACTIONS

export const addBook = async (newBook: any) => {
    const { data } = await axios.post('/api/books/create', newBook);
    if (!data) return;

    books.value = data

}

export const deleteBook = async (book: Book) => {

    //axios delete request here
    const { data } = await axios.delete(`/api/books/${book.id}`);
    if (!data) return;
    //console.log(data);
    books.value = data

}

export const updateBook = async (bookToEdit: Book) => {
    //axios update request here
    const { data } = await axios.put(`/api/books/${bookToEdit.id}`, bookToEdit);

    if (!data) return;

    books.value = data;
}