import { MoviesList } from "components/MoviesList";
import { fetchTrendingMovies } from "helpers/api";
import { useEffect, useState } from "react";

const Home = () => {
    const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const data = await fetchTrendingMovies();
        setMovies(data.results);
        console.log(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    getTrendingMovies();
  }, []);

    return (
        <>
            <h1>Trending today</h1>
        <MoviesList movies={movies} />
        </>
    )
}

export default Home;