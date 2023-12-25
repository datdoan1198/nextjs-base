import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './rootReducer';
import { createWrapper } from "next-redux-wrapper";

const store = configureStore({
  reducer: rootReducer,
  devTools: true
})


export default store;
