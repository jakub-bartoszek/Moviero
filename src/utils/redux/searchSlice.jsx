import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
 name: "search",
 initialState: {
  searchQuery: "",
  searchResults: [],
  searchStatus: "loading"
 },
 reducers: {
  fetchSearchResults: () => {},
  setSearchQuery: (state, { payload }) => {
   state.searchQuery = payload;
  },
  setSearchResults: (state, { payload }) => {
   state.searchResults = payload;
  },
  setSearchStatus: (state, { payload }) => {
   state.searchStatus = payload;
  }
 }
});

export const {
 setSearchQuery,
 fetchSearchResults,
 setSearchResults,
 setSearchStatus
} = searchSlice.actions;

export const selectSearchQuery = (state) => state.search.searchQuery;
export const selectSearchResults = (state) => state.search.searchResults;
export const selectSearchStatus = (state) => state.search.searchStatus;

export default searchSlice.reducer;
