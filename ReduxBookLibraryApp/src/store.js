import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./bookslice.js"

export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

