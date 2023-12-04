import { takeEvery } from "@redux-saga/core/effects";
import { fetchPopular } from "../redux/dataSlice";

function* fetchPopularHandler() {
}

export function* dataSaga() {
 yield takeEvery(fetchPopular.type, fetchPopularHandler);
}
