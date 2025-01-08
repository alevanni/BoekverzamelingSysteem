import { ref, reactive, computed } from 'vue';
import axios from 'axios';
import { Book, Author } from '../types';

const authors = ref<Author[]>([]);


export const fetchAuthors = async () => {
    const { data } = await axios.get('/api/authors');
    if (!data) return;

    authors.value = data;
}

// GETTERS
export const getAllAuthors = () => authors.value;

export const getAuthorById = (id: number) => computed(() => authors.value.find(author => author.id == id) ?? { 'name': 'anonymous', id: 0 });

// ACTIONS

export const addAuthor = async (newAuthor: any) => {
    //axios post request here
    const { data } = await axios.post('/api/authors/create', newAuthor);
    if (!data) return;
    return data;
}

export const deleteAuthor = async (authorToEdit: Author) => {

}

export const editAuthor = async (author: Author) => {

}