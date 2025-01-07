import { ref, reactive, computed } from 'vue';
import axios from 'axios';
import { Book, Author } from '../types';

const authors = ref<Author[]>([]);


export const fetchAuthors = async () => {
    const { data } = await axios.get('http://localhost:8000/api/authors');
    if (!data) return;
    console.log(data);
    authors.value = data;
}


export const getAllAuthors = () => authors.value;

export const getAuthorById = (id: number) => computed<Author>(() => authors.value.find(author => author.id == id) ?? { name: 'Anonymous', id: 0 });