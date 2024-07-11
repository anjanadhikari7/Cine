import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [""],
  searchMovie: {},
  similarMovie: [],
  isLoading: false,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setWishList: (state, action) => {
      state.wishlist = [...state.wishlist, action.payload];
    },
    setSearchMovie: (state, action) => {
      state.searchMovie = action.payload;
    },
    setSimilarMovie: (state, action) => {
      state.similarMovie = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

const { reducer: movieReducer, actions } = movieSlice;

export const { setWishList, setSearchMovie, setSimilarMovie, isLoading } =
  actions;

export default movieReducer;
