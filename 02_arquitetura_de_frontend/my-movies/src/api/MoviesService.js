import axios from "axios";

const withBaseUrl = (path) => {
  return `${process.env.REACT_APP_BASE_URL}${path}?api_key=${process.env.REACT_APP_TMDB_APP_KEY}`;
}
export class MoviesService {
  static getMovies() {
    return axios.get(withBaseUrl("movie/popular"));
  }
  static getMovieById(id) {
    return axios.get(withBaseUrl(`movie/${id}`));
  }
}
