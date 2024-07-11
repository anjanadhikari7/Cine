import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./Redux/MovieSlice";

const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
});

export default store;
