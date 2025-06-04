import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/moviesSlice";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector(state => state.movies);
  const [query, setQuery] = useState("Batman");

  useEffect(() => {
    dispatch(fetchMovies(query));
  }, [query, dispatch]);

  return (
    <div>
      <h2>Search Movies</h2>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {loading && <p>Loading...</p>}
      {error && <p>Error fetching movies.</p>}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;