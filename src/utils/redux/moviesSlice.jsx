import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
 name: "movies",
 initialState: {
  popularMovies: [],
  randomPopularMovie: {},
  similarMovies: [],
  movieDetails: [],
  genres: []
 },
 reducers: {
  fetchPopularMovies: () => {},
  fetchSimilarMovies: () => {},
  fetchMovieDetails: () => {},
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
 setGenres
} = moviesSlice.actions;

export const selectPopularMovies = (state) => state.movies.popularMovies;
export const selectRandomPopularMovie = (state) =>
 state.movies.randomPopularMovie;
export const selectSimilarMovies = (state) => state.movies.similarMovies;
export const selectMovieDetails = (state) => state.movies.movieDetails;
export const selectGenres = (state) => state.movies.genres;

export default moviesSlice.reducer;
