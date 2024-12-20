import { ref, reactive } from 'vue';
import axios from 'axios';
/**
 * @typedef { import("vue").Ref } Ref
 */
// Book-state
/** @type { Ref } */
const books = ref([]);

//authors state
/** @type { Ref } */
const authors = ref([]);

// The function that asks the backend for the books. 
// How? With a get request on the route get('api/books'). This will call the controller according to the file
// web.php (the laravel routing). The controller will not return a view (this is vue's job), just the data.

export const fetchBooks = async () => {
    const { data } = await axios.get('api/books');
    if (!data) return;
    //console.log(data);
    books.value = data;
}

export const fetchAuthors = async () => {
    const { data } = await axios.get('api/authors');
    if (!data) return;
    //console.log(data);
    authors.value = data;
}

// GETTERS
export const getAllBooks = () => books.value;
export const getAllAuthors = () => authors.value;

// ACTIONS

export const addBook = async ( /** @type {any} */ newBook ) => {
    //axios post request here
  
        const { data } = await axios.post('api/books/create', newBook);
        if ( !data ) return;
        else return data;
 
}

export const deleteBook = async (/** @type {any} */ book) => {
   //axios delete request here
   const { data } = await axios.delete('api/books/{id}',  {params: {'id': book} });
   if ( !data ) return;
   else return data;
}