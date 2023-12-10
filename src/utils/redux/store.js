import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";
import searchReducer from "./searchSlice";
import movieReducer from "./movieSlice";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "../saga/rootSaga";

const sagaMiddleWare = createSagaMiddleware();

const store = configureStore({
 reducer: {
  movies: moviesReducer,
  search: searchReducer,
  movie: movieReducer,
 },
 middleware: [sagaMiddleWare]
});

sagaMiddleWare.run(rootSaga);

export default store;