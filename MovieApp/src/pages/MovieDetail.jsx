import { useNavigate } from "react-router-dom";

export default function MovieCard({ movie }) {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/movie/${movie.imdbID}`)} style={{
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "10px",
      cursor: "pointer",
      textAlign: "center",
    }}>
      <img src={movie.Poster} alt={movie.Title} width="150" height="225" />
      <h4>{movie.Title}</h4>
      <p>{movie.Year}</p>
    </div>
  );
}
