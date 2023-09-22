import { Loader } from "components/Loader/Loader";
import { MoviesList } from "components/MoviesList/MoviesList";
import { fetchTrendingMovies } from "helpers/api";
import { useEffect, useState } from "react";
import { toast, Toaster } from 'react-hot-toast';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchTrendingMovies();
       
        setMovies(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getTrendingMovies();
  }, []);

    return (
      <>
        {loading && <Loader />}
        {error && !loading && toast.error(`OOPS! THERE WAS AN ERROR!`)}
        <MoviesList movies={movies} />
        <Toaster position="top-right"/>
        </>
    )
}

export default Home;