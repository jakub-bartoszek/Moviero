import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
 name: "movie",
 initialState: {
  movie: {},
  status: "loading"
 },
 reducers: {
  fetchMovie: () => {},
  setMovie: (state, { payload }) => {
   state.movie = payload;
  },
  setStatus: (state, { payload }) => {
   state.status = payload;
  }
 }
});

export const { fetchMovie, setMovie, setStatus } = movieSlice.actions;

export const selectMovie = (state) => state.movie.movie;
export const selectStatus = (state) => state.movie.status;

export default movieSlice.reducer;
