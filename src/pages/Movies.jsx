import SearchBar from "components/SearchBar";
import { fetchMoviesByQuery } from "helpers/api";
import { useEffect, useState } from "react";
import { Link, useSearchParams, useLocation } from "react-router-dom";
import { toast, Toaster } from 'react-hot-toast';
import { Loader } from "components/Loader/Loader";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const query = searchParams.get('query') ?? '';
  const location = useLocation();
  const backLink = location.state?.from ?? '/'
    
    useEffect(() => {
      if (!query) return;
      
      async function getMoviesListByQuery() {
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
          console.log(error.message)
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
        <SearchBar onSubmit={handleSubmit} />

              <Link to={backLink}>
        <button>Go back</button>
      </Link>
        
            {movies.map(({ id, title }) => {
                return (
                  <li key={id}>
                    <Link to={`${id}`}>
                        {title}
                    </Link>
                  </li>
                )
            })}
        <Toaster position="top-right"/>
        </>
    )
}

export default Movies;