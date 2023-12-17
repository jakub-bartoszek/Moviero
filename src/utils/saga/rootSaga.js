import { all } from "redux-saga/effects";

import { moviesSaga } from "./movies/moviesSaga";
import { movieSaga } from "./movies/movieSaga";
import { peopleSaga } from "./people/peopleSaga";
import { searchSaga } from "./search/searchSaga";

export default function* rootSaga() {
  yield all([moviesSaga(), movieSaga(), peopleSaga(), searchSaga()]);
}