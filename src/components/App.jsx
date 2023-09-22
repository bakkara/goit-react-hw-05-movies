import Home from "pages/Home";
// import MovieDetails from "pages/MovieDetails";
import { lazy } from "react";
// import Movies from "pages/Movies";
import { Route, Routes } from "react-router-dom";
// import Cast from "./Cast/Cast";
import { Layout } from "./Layout/Layout";
// import Reviews from "./Reviews/Reviews";

const Movies = lazy(() => import('../pages/Movies'))
const MovieDetails = lazy(() => import('../pages/MovieDetails'))
const Cast = lazy(() => import('./Cast/Cast'))
const Reviews = lazy(() => import('./Reviews/Reviews'))

export const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews/>} />
        </Route>
      </Route>
      <Route path="*" element={<Home />} />
    </Routes>

    </div>
  );
};
