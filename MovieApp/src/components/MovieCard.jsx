import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const apiKey = "your_api_key"; // replace with your OMDb API key

  useEffect(() => {
    async function fetchMovie() {
      try {
        const res = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${id}`);
        const data = await res.json();

        if (data.Response === "True") {
          setMovie(data);
        } else {
          setError(data.Error);
        }

      } catch {
        setError("Failed to load movie");
      }

      setLoading(false);
    }

    fetchMovie();
  }, [id]);

  if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;
  if (error) return <p style={{ textAlign: "center", color: "red" }}>{error}</p>;

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h2>{movie.Title} ({movie.Year})</h2>
      <img src={movie.Poster} alt={movie.Title} style={{ float: "left", marginRight: "20px", width: "200px" }} />
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Plot:</strong> {movie.Plot}</p>
      <p><strong>Actors:</strong> {movie.Actors}</p>
      <p><strong>Director:</strong> {movie.Director}</p>
    </div>
  );
}
