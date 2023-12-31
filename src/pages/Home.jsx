import { Loader } from "components/Loader/Loader";
import { Container } from "components/MainContent.styled";
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
      <Container>
        {loading && <Loader />}
        {error && !loading && toast.error(`OOPS! THERE WAS AN ERROR!`)}
        
        <h1>Trending today</h1>
        <MoviesList movies={movies} />
        <Toaster position="top-right"/>
      </Container>
    )
}

export default Home;