import {useLocation } from 'react-router-dom';
import { Container } from '../MainContent.styled';
import { LinkStyled, MovieList } from './MovieList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation(); 
  return (
    <Container>
    <h1>Trending today</h1>
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
    </Container>
  );
};