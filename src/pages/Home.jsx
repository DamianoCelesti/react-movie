import MovieCard from "../components/MovieCard"
import { useState, useEffect } from "react"
import { searchMovies, getPopularMovies } from "../services/api";


function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
                //console.log(popularMovies)
            } catch (error) {
                console.log(error)
                setError("Failed to load movies")
            }
            finally {
                setLoading(false)
            }
        }
        loadPopularMovies()
    }, [])


    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
    }

    const handleChange = (e) => {
        setSearchQuery(e.target.value)
    }
    return (

        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Cerca film.."
                    className="search-input"
                    value={searchQuery}
                    onChange={handleChange}
                />
                <button type="submit" className="search-btn">Search</button>
            </form>
            <div className="movie-grid">
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>

    )
}

export default Home