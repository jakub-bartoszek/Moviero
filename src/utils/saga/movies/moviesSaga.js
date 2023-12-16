import { takeLatest, call, put, delay } from "@redux-saga/core/effects";
import { fetchMovieDetails, fetchPopularMovies, fetchSearchResults, fetchSimilarMovies, setGenres, setMovieDetails, setPopularMovies, setSearchResults, setSimilarMovies, setStatus, setTotalPages, setTotalResults } from "../../redux/moviesSlice";
import { getPopularMovies } from "./getPopularMovies";
import { getGenres } from "./getGenres";
import { getSimilarMovies } from "./getSimilarMovies";
import { getMovieDetails } from "./getMovieDetails";
import { fetchSearchbarResults, setSearchbarResults, setSearchStatus } from "../../redux/searchSlice";
import { getSearchResults } from "./getSearchResults";

function* fetchPopularMoviesHandler({ payload }) {
 try {
  yield put(setStatus("loading"));
  const popularMovies = yield call(getPopularMovies, payload.page);
  const genres = yield call(getGenres);
  yield put(setPopularMovies(popularMovies.results));
  yield put(setTotalPages(popularMovies.total_pages));
  yield put(setGenres(genres));
 }
 catch (error) {
  yield put(setStatus("error"));

 }
}

function* fetchSimilarMoviesHandler({ payload }) {
 try {
  yield put(setStatus("loading"));
  const similarMovies = yield call(getSimilarMovies, payload.genreIds);
  yield put(setSimilarMovies(similarMovies));
  yield delay(200);
  yield put(setStatus("success"));
 }
 catch (error) {
  yield put(setStatus("error"));
 }
}

function* fetchMovieDetailsHandler({ payload }) {
 try {
  yield put(setStatus("loading"));
  const movieDetails = yield call(getMovieDetails, payload.movieId);
  yield put(setMovieDetails(movieDetails));
 }
 catch (error) {
  yield put(setStatus("error"));

 }
}


function* fetchSearchbarResultsHandler({ payload }) {
 try {
  yield put(setSearchStatus("loading"));
  const searchbarResults = yield call(getSearchResults, payload.searchQuery, 1, payload.category);
  yield put(setSearchbarResults(searchbarResults.results));
  yield delay(200);
  yield put(setSearchStatus("success"));
 }
 catch (error) {
  yield put(setSearchStatus("error"));
 }
}

function* fetchSearchResultsHandler({ payload }) {
 try {
  yield put(setStatus("loading"));
  console.log(payload);
  const searchResults = yield call(getSearchResults, payload.searchQuery, payload.page, payload.category);
  yield put(setSearchResults(searchResults.results));
  yield put(setTotalPages(searchResults.total_pages));
  yield put(setTotalResults(searchResults.total_results));
  yield delay(200);
  yield put(setStatus("success"));
 }
 catch (error) {
  yield put(setStatus("error"));
 }
}

export function* moviesSaga() {
 yield takeLatest(fetchPopularMovies.type, fetchPopularMoviesHandler);
 yield takeLatest(fetchSimilarMovies.type, fetchSimilarMoviesHandler);
 yield takeLatest(fetchMovieDetails.type, fetchMovieDetailsHandler);
 yield takeLatest(fetchSearchbarResults.type, fetchSearchbarResultsHandler);
 yield takeLatest(fetchSearchResults.type, fetchSearchResultsHandler);
}
