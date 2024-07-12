import { setClickedMovieResults } from "./MovieSlice";

export const clickedMovieResults = (clickedmovietitle) => (dispatch) => {
  dispatch(setClickedMovieResults(clickedmovietitle));
};
