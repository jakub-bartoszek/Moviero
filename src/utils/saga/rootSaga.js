import { all } from "redux-saga/effects";

import { moviesSaga } from "./movies/moviesSaga";
import { movieSaga } from "./movies/movieSaga";
import { peopleSaga } from "./people/peopleSaga";

export default function* rootSaga() {
  yield all([moviesSaga(), movieSaga(), peopleSaga()]);
}