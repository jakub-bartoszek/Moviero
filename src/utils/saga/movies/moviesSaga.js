import { takeLatest, call, put, delay } from "@redux-saga/core/effects";
import { fetchMovieDetails, fetchPopularMovies, fetchSimilarMovies, setGenres, setMovieDetails, setPopularMovies, setSimilarMovies, setStatus, setTotalPages } from "../../redux/moviesSlice";
import { getPopularMovies } from "./getPopularMovies";
import { getGenres } from "./getGenres";
import { getSimilarMovies } from "./getSimilarMovies";
import { getMoviesDetails } from "./getMovieDetails";

function* fetchPopularMoviesHandler({ payload }) {
 try {
  yield put(setStatus("loading"))
  const popularMovies = yield call(getPopularMovies, payload.page);
  const genres = yield call(getGenres);
  yield put(setPopularMovies(popularMovies.results));
  yield put(setTotalPages(popularMovies.total_pages));
  yield put(setGenres(genres));
 }
 catch (error) {
  yield put(setStatus("error"))

 }
}

function* fetchSimilarMoviesHandler({ payload }) {
 try {
  yield put(setStatus("loading"))
  const similarMovies = yield call(getSimilarMovies, payload.genreIds);
  yield put(setSimilarMovies(similarMovies));
  yield delay(200)
  yield put(setStatus("success"))
 }
 catch (error) {
  yield put(setStatus("error"))
 }
}

function* fetchMovieDetailsHandler({ payload }) {
 try {
  yield put(setStatus("loading"))
  const movieDetails = yield call(getMoviesDetails, payload.movieId);
  yield put(setMovieDetails(movieDetails));
 }
 catch (error) {
  yield put(setStatus("error"))

 }
}

export function* moviesSaga() {
 yield takeLatest(fetchPopularMovies.type, fetchPopularMoviesHandler);
 yield takeLatest(fetchSimilarMovies.type, fetchSimilarMoviesHandler);
 yield takeLatest(fetchMovieDetails.type, fetchMovieDetailsHandler);
}
