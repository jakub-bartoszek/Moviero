import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
 name: "search",
 initialState: {
  searchQuery: "",
  searchbarResults: [],
  searchStatus: "loading",
  category: "movie"
 },
 reducers: {
  fetchSearchbarResults: () => {},
  setSearchQuery: (state, { payload }) => {
   state.searchQuery = payload;
  },
  setCategory: (state, { payload }) => {
   state.category = payload;
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
 setCategory,
 setSearchbarResults,
 setSearchStatus
} = searchSlice.actions;

export const selectSearchQuery = (state) => state.search.searchQuery;
export const selectSearchbarResults = (state) => state.search.searchbarResults;
export const selectSearchStatus = (state) => state.search.searchStatus;
export const selectCategory = (state) => state.search.category;

export default searchSlice.reducer;
