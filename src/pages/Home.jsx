import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
                setError(null);
            } catch (error) {
                console.log(error);
                setError("Impossibile caricare i film popolari.");
            } finally {
                setLoading(false);
            }
        };
        loadPopularMovies();
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim() || loading) return;

        setLoading(true);
        try {
            const searchResult = await searchMovies(searchQuery);
            setMovies(searchResult);
            setError(null);
        } catch (err) {
            console.log(err);
            setError("Errore durante la ricerca del film.");
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => setSearchQuery(e.target.value);

    return (
        <div className="home">
            <div className="container">
                <div className="search-wrap">
                    <form onSubmit={handleSearch} className="search-form" role="search" aria-label="Cerca film">
                        <input
                            type="text"
                            placeholder="Cerca film..."
                            className="search-input"
                            value={searchQuery}
                            onChange={handleChange}
                            aria-label="Campo di ricerca"
                        />
                        <button type="submit" className="search-btn" disabled={loading}>
                            {loading ? "Carico..." : "🔍 Cerca"}
                        </button>
                    </form>
                </div>

                {error && <div className="error-message" role="alert">{error}</div>}

                {loading ? (
                    <div className="loading" aria-live="polite">
                        <div className="spinner" /> Caricamento in corso...
                    </div>
                ) : (
                    <>
                        <h2 className="section-title">Film</h2>
                        <div className="movie-grid">
                            {movies.map((movie) => (
                                <MovieCard movie={movie} key={movie.id} />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Home;
