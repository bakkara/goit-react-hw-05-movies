
import { MovieCard } from 'components/MovieCard';
import { fetchMovieDetailsById } from 'helpers/api';
import { useEffect, useState } from 'react'
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const location = useLocation();
  const backLink = location.state?.from ?? '/'
  // const [loading, setLoading] = useState(false)
  // const [error, setError] = useState(false)
 
  useEffect(() => {
    if (!movieId) return;
    
    const getMovieInfoById = async () => {
      try {
        /* setLoading(true);
        setError(false); */
        const data = await fetchMovieDetailsById(movieId);
        setMovieInfo(data);
        
      } catch (error) {
        console.log(error.message)
        /* setError(true); */
         /* toast.error(`OOPS! THERE WAS AN ERROR!`) */
      } finally {
        /* setLoading(false); */
      }
    };

    getMovieInfoById();
  }, [movieId]);

  return (
    <>
      <Link to={backLink}>
        <button>Go back</button>
      </Link>
      
      <div>MovieDetails</div>
      {movieInfo && <MovieCard movieInfo={movieInfo} />}
      <ul>
        <li>
          <Link to='cast'>
            Cast
          </Link>
        </li>
        <li>
          <Link to='reviews'>Reviews</Link>
        </li>
      </ul>
      <Outlet/>
    </>
  )
}
export default MovieDetails;