import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "../saga/rootSaga";

const sagaMiddleWare = createSagaMiddleware();

const store = configureStore({
 reducer: {
  movies: moviesReducer
 },
 middleware: [sagaMiddleWare]
});

sagaMiddleWare.run(rootSaga);

export default store;