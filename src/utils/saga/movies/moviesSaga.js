import { takeLatest, call, put } from "@redux-saga/core/effects";
import { fetchMovieDetails, fetchPopularMovies, fetchSimilarMovies, setGenres, setMovieDetails, setPopularMovies, setSimilarMovies } from "../../redux/moviesSlice";
import { getPopularMovies } from "./getPopularMovies";
import { getGenres } from "./getGenres";
import { getSimilarMovies } from "./getSimilarMovies";
import { getMoviesDetails } from "./getMovieDetails";

function* fetchPopularMoviesHandler() {
 try {
  const popularMovies = yield call(getPopularMovies);
  const genres = yield call(getGenres);
  yield put(setPopularMovies(popularMovies));
  yield put(setGenres(genres));
 }
 catch (error) {
  console.log(error);
 }
}

function* fetchSimilarMoviesHandler({ payload }) {
 try {
  const similarMovies = yield call(getSimilarMovies, payload.genreIds);
  yield put(setSimilarMovies(similarMovies));
 }
 catch (error) {
  console.log(error);
 }
}

function* fetchMovieDetailsHandler({ payload }) {
 try {
  const movieDetails = yield call(getMoviesDetails, payload.movieId);
  yield put(setMovieDetails(movieDetails));
 }
 catch (error) {
  console.log(error);
 }
}

export function* moviesSaga() {
 yield takeLatest(fetchPopularMovies.type, fetchPopularMoviesHandler);
 yield takeLatest(fetchSimilarMovies.type, fetchSimilarMoviesHandler);
 yield takeLatest(fetchMovieDetails.type, fetchMovieDetailsHandler);
}
