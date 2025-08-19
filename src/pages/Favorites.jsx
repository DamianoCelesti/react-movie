import { Link } from "react-router-dom";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { favorites } = useMovieContext();
  const hasFavorites = favorites && favorites.length > 0;

  return (
    <div className="favorites">
      <div className="container">
        <h2 className="section-title">I tuoi preferiti</h2>

        {hasFavorites ? (
          <div className="movie-grid">
            {favorites.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        ) : (
          <div className="favorites-empty">
            <p>Nessun film nei preferiti.</p>
            <Link to="/">Torna alla Home</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Favorites;
