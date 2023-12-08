import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";
import searchReducer from "./searchSlice";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "../saga/rootSaga";

const sagaMiddleWare = createSagaMiddleware();

const store = configureStore({
 reducer: {
  movies: moviesReducer,
  search: searchReducer
 },
 middleware: [sagaMiddleWare]
});

sagaMiddleWare.run(rootSaga);

export default store;