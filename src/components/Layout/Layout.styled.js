import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #7dc654;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`
    ;

export const Navigation = styled.ul`
display: flex;
gap: 20px;
color: #fff;
text-decoration: none;

`;

export const NavLinkStyled = styled(NavLink)`
  color: #ffffff;
  font-size: 20px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;
  &:hover {
   font-weight: 600;
   color: #1f521a;
  }

  &.active {
    font-weight: 600;
    color: #1f521a;
    text-decoration: underline;
  }

`;