import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
 name: "people",
 initialState: {
  status: "loading",
  popularPeople: [],
  searchResults: [],
  totalPages: 1
 },
 reducers: {
  fetchPopularPeople: () => {},
  fetchSearchResults: () => {},
  setStatus: (state, { payload }) => {
   state.status = payload;
  },
  setSearchResults: (state, { payload }) => {
   state.searchResults = payload;
  },
  setPopularPeople: (state, { payload }) => {
   state.popularPeople = payload;
  },
  setTotalPages: (state, { payload }) => {
   if (payload > 500) {
    state.totalPages = 500;
   } else {
    state.totalPages = payload;
   }
  }
 }
});

export const {
 fetchPopularPeople,
 fetchSearchResults,
 setSearchResults,
 setPopularPeople,
 setTotalPages,
 setStatus
} = peopleSlice.actions;

export const selectPopularPeople = (state) => state.people.popularPeople;
export const selectTotalPages = (state) => state.people.totalPages;
export const selectStatus = (state) => state.people.status;
export const selectSearchResults = (state) => state.people.searchResults;

export default peopleSlice.reducer;
