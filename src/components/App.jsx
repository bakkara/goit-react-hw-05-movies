import Home from "pages/Home";
import MovieDetails from "pages/MovieDetails";
import Movie from "pages/Movies";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route index element={<Home/>} />
          <Route path="movies" element={<Movie />} />
          <Route path="movies/:movieID" element={<MovieDetails />} />
        </Route>
      </Routes>
    </div>
  );
};
