import { useState } from "react";
import MovieCard from "../components/MovieCard";

export default function Home() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const apiKey = "3dc03caf"; 

  async function searchMovies(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${query}`);
      const data = await res.json();

      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setError(data.Error);
        setMovies([]);
      }
    } catch (err) {
      setError("Something went wrong");
    }

    setLoading(false);
  }

  return (
    <>
      <form onSubmit={searchMovies} style={{ textAlign: "center", margin: "20px" }}>
        <input
          type="text"
          placeholder="Search by title..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ padding: "10px", width: "300px" }}
        />
        <button type="submit" style={{ padding: "10px" }}>Search</button>
      </form>

      {loading && <p style={{ textAlign: "center" }}>Loading...</p>}
      {error && <p style={{ textAlign: "center", color: "red" }}>{error}</p>}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "15px", padding: "20px" }}>
        {movies.map(movie => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </>
  );
}
