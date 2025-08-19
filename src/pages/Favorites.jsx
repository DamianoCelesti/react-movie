import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard"


function Favorites() {
    const { favorites } = useMovieContext()

    if (favorites) {
        return (
            <div className="favorites">
                <h2>I tuoi preferiti</h2>
                <div className="movie-grid">
                    {favorites.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Favorites