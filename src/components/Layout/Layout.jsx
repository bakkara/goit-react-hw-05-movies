import { Outlet } from "react-router-dom";
import { Header, Navigation, NavLinkStyled } from "./Layout.styled";
import { Container } from "../MainContent.styled";
import { BiHomeAlt, BiCameraMovie } from 'react-icons/bi';

export const Layout = () => {
  return (
      <div>
      <Header>
        <Container>
          <Navigation>
            <NavLinkStyled to="/">  Home <BiHomeAlt/></NavLinkStyled>
            <NavLinkStyled to="/movies">Movie <BiCameraMovie/></NavLinkStyled>
          </Navigation>
        </Container>
        </Header>
          <Outlet/>
      </div>
  )
}
