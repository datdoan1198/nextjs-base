import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const appSlice = createSlice({
  name: 'app',
  initialState: {
    title: 'Dashboard',
  },
  reducers: {
    setTitlePage: (state, action) => ({
      ...state,
      title: action.payload
    }),
  }
})

export const {
  setTitlePage,
} = appSlice.actions

export default appSlice.reducer;
