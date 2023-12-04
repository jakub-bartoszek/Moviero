import { all } from "redux-saga/effects";

import { dataSaga } from "./dataSaga";

export default function* rootSaga() {
  yield all([dataSaga()]);
}