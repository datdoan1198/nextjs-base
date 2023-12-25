import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: 'user',
  initialState: {
    visibleModalCreateOrUpdate: false,
  },
  reducers: {
    setVisibleModalCreateOrUpdate: (state, action) => ({
      ...state,
      visibleModalCreateOrUpdate: action.payload
    }),
  }
})

export const {
  setVisibleModalCreateOrUpdate
} = appSlice.actions

export default appSlice.reducer;
