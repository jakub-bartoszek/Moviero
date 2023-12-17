import { takeLatest, call, put, delay } from "@redux-saga/core/effects";
import { fetchSearchbarResults, fetchSearchResults, setSearchbarResults, setSearchbarStatus, setSearchResults, setSearchStatus, setTotalPages, setTotalResults } from "../../redux/searchSlice";
import { getSearchResults } from "./getSearchResults";

function* fetchSearchbarResultsHandler({ payload }) {
 try {
  yield put(setSearchbarStatus("loading"));
  const searchbarResults = yield call(getSearchResults, payload.searchQuery, 1, payload.category);
  yield put(setSearchbarResults(searchbarResults.results));
  yield delay(200);
  yield put(setSearchbarStatus("success"));
 }
 catch (error) {
  yield put(setSearchbarStatus("error"));
 }
}

function* fetchSearchResultsHandler({ payload }) {
 try {
  yield put(setSearchStatus("loading"));
  const searchResults = yield call(getSearchResults, payload.searchQuery, payload.page, payload.category);
  yield put(setSearchResults(searchResults.results));
  yield put(setTotalPages(searchResults.total_pages));
  yield put(setTotalResults(searchResults.total_results));
  yield delay(500);
  yield put(setSearchStatus("success"));
 }
 catch (error) {
  yield put(setSearchStatus("error"));
 }
}

export function* searchSaga() {
 yield takeLatest(fetchSearchbarResults.type, fetchSearchbarResultsHandler);
 yield takeLatest(fetchSearchResults.type, fetchSearchResultsHandler);
}
