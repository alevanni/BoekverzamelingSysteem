import { ref, reactive, computed } from "vue";
import axios from "axios";
import { Book, Author } from "../types";

const authors = ref<Author[]>([]);

export const fetchAuthors = async () => {
    const { data } = await axios.get("/api/authors");
    if (!data) return;

    authors.value = data;
};

// GETTERS
export const getAllAuthors = () => authors.value;

export const getAuthorById = (id: number) =>
    computed(
        () =>
            authors.value.find((author) => author.id == id) ?? {
                name: "Anonymous",
                id: 1,
            }
    );

// ACTIONS

export const addAuthor = async (newAuthor: any) => {
    //axios post request here
    const { data } = await axios.post("/api/authors/create", newAuthor);
    if (!data) return;
    authors.value = data;
};

export const deleteAuthor = async (author: Author) => {
    //axios delete request here
    const { data } = await axios.delete(`/api/authors/${author.id}`);
    if (!data) return;
    authors.value = data;
};

export const updateAuthor = async (authorToEdit: Author) => {
    //axios update request here
    const { data } = await axios.put(
        `/api/authors/${authorToEdit.id}`,
        authorToEdit
    );

    if (!data) return;

    authors.value = data;
};
