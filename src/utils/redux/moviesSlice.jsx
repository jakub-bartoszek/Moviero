import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
 name: "movies",
 initialState: {
  status: "loading",
  popularMovies: [],
  randomPopularMovie: {},
  similarMovies: [],
  movieDetails: [],
  genres: [],
  totalPages: 1,
 },
 reducers: {
  fetchPopularMovies: () => {},
  fetchSimilarMovies: () => {},
  fetchMovieDetails: () => {},
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
  setMovieDetails: (state, { payload }) => {
   state.movieDetails = payload;
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
 fetchMovieDetails,
 setPopularMovies,
 setSimilarMovies,
 setMovieDetails,
 setGenres,
 setTotalPages,
 setStatus
} = moviesSlice.actions;

export const selectPopularMovies = (state) => state.movies.popularMovies;
export const selectRandomPopularMovie = (state) =>
 state.movies.randomPopularMovie;
export const selectSimilarMovies = (state) => state.movies.similarMovies;
export const selectMovieDetails = (state) => state.movies.movieDetails;
export const selectGenres = (state) => state.movies.genres;
export const selectTotalPages = (state) => state.movies.totalPages;
export const selectStatus = (state) => state.movies.status;

export default moviesSlice.reducer;
