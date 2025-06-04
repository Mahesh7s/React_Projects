import React from "react";
import { useDispatch } from "react-redux";
import { addToWatchlist } from "../redux/watchlistSlice";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
    : "https://via.placeholder.com/200x300";

  return (
    <div style={{ border: "1px solid #ccc", margin: 10, padding: 10, width: 200 }}>
      <img src={poster} alt={movie.title} width="100%" />
      <h3>{movie.title}</h3>
      <button onClick={() => dispatch(addToWatchlist(movie))}>Add to Watchlist</button>
    </div>
  );
};

export default MovieCard;