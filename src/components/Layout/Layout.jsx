import { Outlet } from "react-router-dom";
import { Header, Navigation, NavLinkStyled } from "./Layout.styled";
import { Container } from "../MainContent.styled";
import { BiHomeAlt, BiCameraMovie } from 'react-icons/bi';
import { Suspense } from "react";
import { Loader } from "components/Loader/Loader";

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
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
      </div>
  )
}
