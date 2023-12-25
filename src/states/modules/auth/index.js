import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthSuccess: false,
    authUser:{},
  },
  reducers: {
    setAuth: (state, action) => ({
      ...state,
      isAuthSuccess: action.payload.isAuth,
      authUser: action.payload.authUser
    }),
  }
})

export const {
  setAuth,
} = appSlice.actions

export default appSlice.reducer;
