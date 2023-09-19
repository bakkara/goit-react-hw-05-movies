import { Link } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  /* const location = useLocation(); */

  return (
    <>
      {movies.map(({ id, title }) => {
        return (
          <li key={id}>
            {/* <Link to={`/movies/${id}`} state={{ from: location }}> */}
              {title}
            {/* </Link> */}
          </li>
        );
      })}
    </>
  );
};