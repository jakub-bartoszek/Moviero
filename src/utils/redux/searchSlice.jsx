import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
 name: "search",
 initialState: {
  searchQuery: "",
  searchbarResults: [],
  searchResults: [],
  searchStatus: "loading",
  searchbarStatus: "loading",
  totalPages: 1,
  totalResults: 20,
  category: "movie"
 },
 reducers: {
  fetchSearchbarResults: () => {},
  fetchSearchResults: () => {},
  setSearchQuery: (state, { payload }) => {
   state.searchQuery = payload;
  },
  setCategory: (state, { payload }) => {
   state.category = payload;
  },
  setTotalPages: (state, { payload }) => {
   state.totalPages = payload;
  },
  setTotalResults: (state, { payload }) => {
   state.totalResults = payload;
  },
  setSearchResults: (state, { payload }) => {
   state.searchResults = payload;
  },
  setSearchbarResults: (state, { payload }) => {
   state.searchbarResults = payload;
  },
  setSearchbarStatus: (state, { payload }) => {
   state.searchbarStatus = payload;
  },
  setSearchStatus: (state, { payload }) => {
   state.searchStatus = payload;
  }
 }
});

export const {
 setTotalResults,
 setSearchQuery,
 fetchSearchbarResults,
 fetchSearchResults,
 setCategory,
 setSearchbarResults,
 setSearchResults,
 setSearchStatus,
 setTotalPages,
 setSearchbarStatus
} = searchSlice.actions;

export const selectSearchQuery = (state) => state.search.searchQuery;
export const selectSearchbarResults = (state) => state.search.searchbarResults;
export const selectSearchResults = (state) => state.search.searchResults;
export const selectSearchStatus = (state) => state.search.searchStatus;
export const selectSearchbarStatus = (state) => state.search.searchbarStatus;
export const selectCategory = (state) => state.search.category;
export const selectTotalPages = (state) => state.search.totalPages;
export const selectTotalResults = (state) => state.search.totalResults;

export default searchSlice.reducer;
