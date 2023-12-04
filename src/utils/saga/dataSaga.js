import { takeEvery, call, put } from "@redux-saga/core/effects";
import { fetchPopular, setData } from "../redux/dataSlice";
import { getPopular } from "./getPopular";

function* fetchPopularHandler() {
 try {
  const data = yield call(getPopular);
  yield put(setData(data));
 }
 catch (error) {
  console.log(error);
 }
}

export function* dataSaga() {
 yield takeEvery(fetchPopular.type, fetchPopularHandler);
}
