import axios from "axios";
import { addmovies, adderrors } from "../Reducers/tmdbReducer";

export const asyncGetPopularMovies = () => async (dispatch, getState) => {
  try {
    const { page } = getState().tmdb;
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=e9e5a998666af3b52285ccbb3a594f35&page=${page}`
    );
    dispatch(addmovies(data.results));
  } catch (error) {
    const errorMessage = error.response && error.response.data && error.response.data.status_message
      ? error.response.data.status_message
      : error.message || 'An error occurred';
    dispatch(adderrors(errorMessage));
  }
};
