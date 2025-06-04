import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = "your_tmdb_api_key";

export const fetchMovies = createAsyncThunk("movies/fetch", async (query) => {
  const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`);
  return res.data.results;
});

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    loading: false,
    error: false,
    movies: [],
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchMovies.pending, state => {
        state.loading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, state => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default moviesSlice.reducer;
