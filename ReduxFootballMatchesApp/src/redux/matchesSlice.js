import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk to fetch data
export const fetchMatches = createAsyncThunk("matches/fetch", async () => {
  const response = await axios.get("https://jsonmock.hackerrank.com/api/football_matches?page=2");
  return response.data.data;
});

const matchesSlice = createSlice({
  name: "matches",
  initialState: {
    isLoading: false,
    isError: false,
    footballMatches: [],
    filters: {
      team: "",
      date: "",
      outcome: "",
    },
    searchTerm: "",
    favorites: [],
  },
  reducers: {
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    toggleFavorite: (state, action) => {
      const id = action.payload;
      if (state.favorites.includes(id)) {
        state.favorites = state.favorites.filter(fav => fav !== id);
      } else {
        state.favorites.push(id);
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchMatches.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchMatches.fulfilled, (state, action) => {
        state.isLoading = false;
        state.footballMatches = action.payload;
      })
      .addCase(fetchMatches.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { setFilters, setSearchTerm, toggleFavorite } = matchesSlice.actions;
export default matchesSlice.reducer;
