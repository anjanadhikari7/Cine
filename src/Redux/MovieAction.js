import { SEARCH_MOVIE_URL } from "../apiConfig";
import { fetchMovieDetails } from "../utilities/helper";
import {
  setSearchMovie,
  setSimilarMovie,
  setWishList,
  setIsLoading,
} from "./MovieSlice";

export const addToWishListAction = (movie) => (dispatch) => {
  dispatch(setWishList(movie));
};

export const searchMovieAction = (query) => async (dispatch) => {
  dispatch(setIsLoading(true));

  try {
    const response = await axios.get(SEARCH_MOVIE_URL(query));
    if (response.data.results.length > 0) {
      const [firstMovie, ...restMovies] = response.data.results;
      const detailedMovie = await fetchMovieDetails(firstMovie.id);

      dispatch(setSearchMovie(detailedMovie));
      dispatch(setSimilarMovie(restMovies)); // Set similar movies here
    } else {
      dispatch(setSearchMovie({}));
      dispatch(setSimilarMovie([]));
    }
    dispatch(setIsLoading(false));
  } catch (error) {
    alert(error.message);
    dispatch(setIsLoading(false));
  }
};

export const handleMovieClickAction = (movieID) => async (dispatch) => {
  dispatch(setIsLoading(true));
  const detailedMovie = await fetchMovieDetails(movieID);
  dispatch(setSearchMovie(detailedMovie));
  dispatch(setSimilarMovie([]));
  dispatch(setIsLoading(false));
  window.scrollTo({ top: 0, behavior: "smooth" });
};
