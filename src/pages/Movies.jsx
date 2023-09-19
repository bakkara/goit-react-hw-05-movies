import { Link, useSearchParams } from "react-router-dom";

const Movie = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    return (
        <>
            <input type="text" />
            <button>Go back</button>
            {["movie-1", "movie-2", "movie-3"].map(movie => {
                return (
                    <Link key={movie} to={`${movie}`}>
                        {movie}
                    </Link>
                )
            })}
        </>
    )
}

export default Movie;