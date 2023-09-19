import axios from 'axios';

const API_KEY = '8257f8be7524fbbf7b3cbf19ace826ec';

export const fetchTrendingMovies = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  );
  return response.data;
};

export const fetchMovieDetailsById = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${Number(movieId)}?api_key=${API_KEY}`
  );

  return response.data;
};

export const fetchCastById = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${Number(
      movieId
    )}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const fetchReviewsById = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${Number(movieId)}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const fetchMoviesByQuery = async query => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/${query}?api_key=${API_KEY}&include_adult=false`
  );
  return response.data;
};