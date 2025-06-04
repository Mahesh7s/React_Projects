import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './moviesSlice';
import authReducer from './authSlice';
import watchlistReducer from './watchlistSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    auth: authReducer,
    watchlist: watchlistReducer,
  },
});
