import SearchBar from "components/SearchBar";
import { fetchMoviesByQuery } from "helpers/api";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? '';
    
    useEffect(() => {
      if (!query) {
        return;
      }
      const getMoviesListByQuery = async () => {     
        try {
          const { results } = await fetchMoviesByQuery(query);
          setMovies(results);
          
          if (!results.length) {
// return toast.error(`We didn't find anything. Try again`);
            return;
        }
        } catch (error) {
          console.log(error.message)
      } finally {
        /* setLoading(false); */
      }
         };
         getMoviesListByQuery();  
  
    }, [query]);
    
    const handleSubmit = evt => {
    evt.preventDefault();
    
        const value = evt.target.query.value.trim('').toLowerCase();

    if (value === '') {
// return toast.error(`We didn't find anything. Try again`);
      setSearchParams({});
      return;
    }

      setSearchParams({ query: value });
  
  };
    return (
        <>
          <SearchBar onSubmit={ handleSubmit}/>
        <button>Go back</button>
        
            {movies.map(({ id, title }) => {
                return (
                  <li key={id}>
                    <Link to={`${id}`}>
                        {title}
                    </Link>
                  </li>
                )
            })}
        </>
    )
}

export default Movies;