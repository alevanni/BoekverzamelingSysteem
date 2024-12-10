import { ref, reactive } from 'vue';
import axios from 'axios';

// Book-state
const books = ref([]);

// The function that asks the backend for the books. 
// How? With a get request on the route get('api/books'). This will call the controller according to the file
// web.php (the laravel routing). The controller will not return a view (this is vue's job), just the data.

export const fetchBooks = async () => {
    const {data} = await axios.get('api/books');
    if (!data) return;
    //console.log(data);
    books.value = data;
}

// GETTER 
export const getAllBooks = () => books.value;