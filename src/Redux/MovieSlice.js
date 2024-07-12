import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ClickedMovieResults: [],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setClickedMovieResults: (state, action) => {
      state.ClickedMovieResults = action.payload;
    },
  },
});

const { reducer: movieReducer, actions } = movieSlice;

export const { setClickedMovieResults } = actions;

export default movieReducer;
