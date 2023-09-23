import SearchBar from "components/SearchBar/SearchBar";
import { fetchMoviesByQuery } from "helpers/api";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { toast, Toaster } from 'react-hot-toast';
import { Loader } from "components/Loader/Loader";
import { Container } from "components/MainContent.styled";
import { MoviesList } from "components/MoviesList/MoviesList";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const query = searchParams.get('query') ?? '';
    
    useEffect(() => {
      if (!query) return;
      
      const getMoviesListByQuery = async () => {
        try {
          setLoading(true);
          setError(false);
          const { results } = await fetchMoviesByQuery(query);
          
          setMovies(results);
          if (!results.length) {
            return toast.error(`We didn't find anything. Try again`);
          } else {
              toast.success(`We find movies`);
          }
          
        }
        catch (error) {
          setError(true);
      } finally {
        setLoading(false);
      }
         }
         getMoviesListByQuery();  
  
    }, [query]);
    
    const handleSubmit = evt => {
    evt.preventDefault();
    
        const value = evt.target.query.value.trim('').toLowerCase();

    if (value === '') {

      setSearchParams({});
      return;
    }

      setSearchParams({ query: value });
  
  };
    return (
      <>
        {loading && <Loader/> }
        {error && !loading && toast.error(`OOPS! THERE WAS AN ERROR!`)}
        <Container>
          <SearchBar onSubmit={handleSubmit} />

      <MoviesList movies={movies} />
            </Container>
            <Toaster position="top-right"/>
            </>
        )
}

export default Movies;