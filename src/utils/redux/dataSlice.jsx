import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
 name: "data",
 initialState: {
  data: []
 },
 reducers: {
  setData: (state, { payload }) => {
   state.data = payload;
  },
  fetchPopular: () => {}
 }
});

export const { setData, fetchPopular } = dataSlice.actions;

export const selectData = (state) => state.data.data;

export default dataSlice.reducer;
