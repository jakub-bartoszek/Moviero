import { all } from "redux-saga/effects";

import { moviesSaga } from "./movies/moviesSaga";

export default function* rootSaga() {
  yield all([moviesSaga()]);
}