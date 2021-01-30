import axios from 'axios';
const API_KEY = '0ff69c32b74d705c975bcd6fe072688a';
const LANGUAGE = 'ru';

const getPopulation = () => {
  return axios
    .get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&language=${LANGUAGE}`,
    )
    .then(response => response.data.results)
    .catch(error => console.log(error));
};
const getSearchMovies = query => {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}&language=${LANGUAGE}&page=1&include_adult=false`,
    )
    .then(response => response.data.results)
    .catch(error => console.log(error));
};
const getFilmDetails = movie_id => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=${LANGUAGE}`,
    )
    .then(response => response.data)
    .catch(error => console.log(error));
};
const getCast = movie_id => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${API_KEY}&language=${LANGUAGE}`,
    )
    .then(response => response.data)
    .catch(error => console.log(error));
};
const getReviews = movie_id => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movie_id}/watch/providers?api_key=${API_KEY}&language=${LANGUAGE}`,
    )
    .then(response => response.data)
    .catch(error => console.log(error));
};
export default {
  getPopulation,
  getSearchMovies,
  getFilmDetails,
  getCast,
  getReviews,
};
