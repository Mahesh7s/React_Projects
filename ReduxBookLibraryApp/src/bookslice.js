import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  filter: {
    author: "",
    genre: "",
    status: "all",
  },
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.list.push({ id: nanoid(), ...action.payload, read: false });
    },
    deleteBook: (state, action) => {
      state.list = state.list.filter(book => book.id !== action.payload);
    },
    toggleReadStatus: (state, action) => {
      const book = state.list.find(book => book.id === action.payload);
      if (book) book.read = !book.read;
    },
    updateBook: (state, action) => {
      const { id, title, author, genre } = action.payload;
      const book = state.list.find(b => b.id === id);
      if (book) {
        book.title = title;
        book.author = author;
        book.genre = genre;
      }
    },
    setFilter: (state, action) => {
      state.filter = { ...state.filter, ...action.payload };
    },
  },
});

export const { addBook, deleteBook, toggleReadStatus, updateBook, setFilter } = booksSlice.actions;
export default booksSlice.reducer;
