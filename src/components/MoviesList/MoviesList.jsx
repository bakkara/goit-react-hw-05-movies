import {useLocation } from 'react-router-dom';
import { LinkStyled, MovieList } from './MovieList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation(); 
  return (
      <MovieList>
      {movies.map(({ id, title }) => {
        return (
          <li key={id}>
            <LinkStyled to={`/movies/${id}`} state={{ from: location }}> 
              {title}
            </LinkStyled>
          </li>
        );
      })}
      </MovieList>
  );
};