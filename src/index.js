import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppRoutes from "./AppRoutes";
import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import logger from "redux-logger";
import { Provider } from "react-redux";
import { conditionsSlice } from "./components/Conditions/conditions.slice";

export const rootReducer = combineReducers({ conditions: conditionsSlice.reducer });

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "productioon",
  middleware,
});


ReactDOM.render(
  <Provider store={store}>
   <AppRoutes/>
  </Provider>,
  document.getElementById("root")
);
