
import { MovieCard } from 'components/MovieCard/MovieCard';
import { fetchMovieDetailsById } from 'helpers/api';
import { useEffect, useState } from 'react'
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import { Loader } from "components/Loader/Loader";
import { Container } from 'components/MainContent.styled';
import { BsArrowLeft } from 'react-icons/bs';
import { MovieList } from 'components/MoviesList/MovieList.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const location = useLocation();
  const backLink = location.state?.from ?? '/'
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
 
  useEffect(() => {
    if (!movieId) return;
    
    const getMovieInfoById = async () => {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchMovieDetailsById(movieId);
        setMovieInfo(data);
        
      } catch (error) {
       
        setError(true);
        toast.error(`OOPS! THERE WAS AN ERROR!`)
      } finally {
        setLoading(false);
      }
    };

    getMovieInfoById();
  }, [movieId]);

  return (
    <>
        {loading && <Loader/> }
      {error && !loading && toast.error(`OOPS! THERE WAS AN ERROR!`)}
      <Container>
      <Link to={backLink}>
        <button> <BsArrowLeft/> Go back</button>
      </Link>
      
        {movieInfo && <MovieCard movieInfo={movieInfo} />}
      <p>Additional information</p>
      <MovieList>
        <li>
          <Link to='cast'>
            Cast
          </Link>
        </li>
        <li>
          <Link to='reviews'>Reviews</Link>
        </li>
      </MovieList>
        <Outlet />
      </Container>
      <Toaster position="top-right"/>
    </>
  )
}
export default MovieDetails;