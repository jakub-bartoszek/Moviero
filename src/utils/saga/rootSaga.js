import { all } from "redux-saga/effects";

import { moviesSaga } from "./moviesSaga";
import { movieSaga } from "./movieSaga";
import { peopleSaga } from "./peopleSaga";
import { searchSaga } from "./searchSaga";

export default function* rootSaga() {
  yield all([moviesSaga(), movieSaga(), peopleSaga(), searchSaga()]);
}