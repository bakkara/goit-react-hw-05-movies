import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const MovieList = styled.ul`
text-decoration: none;
list-style: none;
display: flex;
flex-direction: column;
gap: 8px;
`;

export const LinkStyled = styled(Link)`
  color: #000;
  font-size: 20px;
  text-decoration: none;

  &:hover {
   font-weight: 600;
   color: #1f521a;
  }
`;