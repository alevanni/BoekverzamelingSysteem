import { storeModuleFactory } from "../../storeModuleFactory";

// the new store for books is made from storeModuleFactory

const bookStore = storeModuleFactory("books");

bookStore.actions.getAll();

export const books = bookStore.getters.all;
