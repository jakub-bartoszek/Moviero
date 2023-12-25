import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
 name: "movies",
 initialState: {
  status: "loading",
  popularMovies: [],
  randomPopularMovie: {},
  similarMovies: [],
  genres: [],
  totalPages: 1
 },
 reducers: {
  fetchPopularMovies: () => {},
  fetchSimilarMovies: () => {},
  setStatus: (state, { payload }) => {
   state.status = payload;
  },

  setPopularMovies: (state, { payload }) => {
   state.popularMovies = payload;
  },
  setRandomPopularMovie: (state, { payload }) => {
   state.randomPopularMovie = payload;
  },
  setSimilarMovies: (state, { payload }) => {
   state.similarMovies = payload;
  },
  setGenres: (state, { payload }) => {
   state.genres = payload;
  },
  setTotalPages: (state, { payload }) => {
   if (payload > 500) {
    state.totalPages = 500;
   } else {
    state.totalPages = payload;
   }
  }
 }
});

export const {
 fetchPopularMovies,
 setRandomPopularMovie,
 fetchSimilarMovies,
 setPopularMovies,
 setSimilarMovies,
 setGenres,
 setTotalPages,
 setStatus
} = moviesSlice.actions;

export const selectPopularMovies = (state) => state.movies.popularMovies;
export const selectRandomPopularMovie = (state) =>
 state.movies.randomPopularMovie;
export const selectSimilarMovies = (state) => state.movies.similarMovies;
export const selectGenres = (state) => state.movies.genres;
export const selectTotalPages = (state) => state.movies.totalPages;
export const selectStatus = (state) => state.movies.status;

export default moviesSlice.reducer;
