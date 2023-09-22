import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
      <div>
        <header>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/movies">Movie</NavLink>
        </nav>
        </header>
          <Outlet/>
      </div>
  )
}
