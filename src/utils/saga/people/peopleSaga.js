import { takeLatest, call, put } from "@redux-saga/core/effects";
import { fetchPopularPeople, setPopularPeople, setStatus, setTotalPages } from "../../redux/peopleSlice";
import { getPopularPeople } from "./getPopularPeople";

function* fetchPopularPeopleHandler({ payload }) {
 try {
  yield put(setStatus("loading"));
  const popularMovies = yield call(getPopularPeople, payload.page);
  yield put(setPopularPeople(popularMovies.results));
  yield put(setTotalPages(popularMovies.total_pages));
  yield put(setStatus("success"));
 }
 catch (error) {
  yield put(setStatus("error"));
 }
}

export function* peopleSaga() {
 yield takeLatest(fetchPopularPeople.type, fetchPopularPeopleHandler);
}
