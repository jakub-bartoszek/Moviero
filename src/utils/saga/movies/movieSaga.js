import { takeLatest, call, put } from "@redux-saga/core/effects";
import { fetchMovie, setMovie, setMovieCredits, setStatus } from "../../redux/movieSlice";
import { getMovieDetails } from "./getMovieDetails";
import { getMovieCredits } from "./getMovieCredits";


function* fetchMovieHandler({ payload }) {
 try {
  
  yield put(setStatus("loading"));
  const movie = yield call(getMovieDetails, payload.movieId);
  const movieCredits = yield call(getMovieCredits, payload.movieId)
  yield put(setMovie(movie));
  yield put(setMovieCredits(movieCredits));
  yield put(setStatus("success"));
 }
 catch (error) {
  yield put(setStatus("error"));
 }
}

export function* movieSaga() {
 yield takeLatest(fetchMovie.type, fetchMovieHandler);
}
