import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "../saga/rootSaga";

const sagaMiddleWare = createSagaMiddleware();

const store = configureStore({
 reducer: {
  data: dataReducer
 },
 middleware: [sagaMiddleWare]
});

sagaMiddleWare.run(rootSaga);

export default store;