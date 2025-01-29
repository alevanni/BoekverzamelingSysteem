
import { Author } from "../types";

import { storeModuleFactory } from "../../storeModuleFactory";
export const authorStore = storeModuleFactory<Author>("authors");

authorStore.actions.getAll();

export const getAllAuthors = authorStore.getters.all;

export const getAuthorById = authorStore.getters.byId;

export const addAuthor = authorStore.actions.create;

export const deleteAuthor = authorStore.actions.deleteItemById;

export const updateAuthor = authorStore.actions.updateItem;