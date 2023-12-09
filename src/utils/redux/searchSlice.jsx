import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
 name: "search",
 initialState: {
  searchQuery: "",
  searchbarResults: [],
  searchStatus: "loading"
 },
 reducers: {
  fetchSearchbarResults: () => {},
  setSearchQuery: (state, { payload }) => {
   state.searchQuery = payload;
  },
  setSearchbarResults: (state, { payload }) => {
   state.searchbarResults = payload;
  },
  setSearchStatus: (state, { payload }) => {
   state.searchStatus = payload;
  }
 }
});

export const {
 setSearchQuery,
 fetchSearchbarResults,
 setSearchbarResults,
 setSearchStatus
} = searchSlice.actions;

export const selectSearchQuery = (state) => state.search.searchQuery;
export const selectSearchbarResults = (state) => state.search.searchbarResults;
export const selectSearchStatus = (state) => state.search.searchStatus;

export default searchSlice.reducer;
