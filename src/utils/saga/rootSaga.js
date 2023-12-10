import { all } from "redux-saga/effects";

import { moviesSaga } from "./movies/moviesSaga";
import { movieSaga } from "./movies/movieSaga";

export default function* rootSaga() {
  yield all([moviesSaga(), movieSaga()]);
}