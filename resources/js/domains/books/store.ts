import { storeModuleFactory } from "../../storeModuleFactory";
import { Book } from "../types";

export const bookStore = storeModuleFactory<Book>("books");

bookStore.actions.getAll();

const books = bookStore.getters.all;

export const getAllBooks = bookStore.getters.all;

export const getBookById = bookStore.getters.byId;

export const addBook = bookStore.actions.create;

export const deleteBook = bookStore.actions.deleteItemById;

export const updateBook = bookStore.actions.updateItem;

