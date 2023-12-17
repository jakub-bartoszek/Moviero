import { createSlice } from "@reduxjs/toolkit";

const personSlice = createSlice({
 name: "person",
 initialState: {
  person: {},
  personCredits: {},
  status: "loading"
 },
 reducers: {
  fetchPerson: () => {},
  setPerson: (state, { payload }) => {
   state.person = payload;
  },
  setPersonCredits: (state, { payload }) => {
   state.personCredits = payload;
  },
  setStatus: (state, { payload }) => {
   state.status = payload;
  }
 }
});

export const { fetchPerson, setPerson, setStatus, setPersonCredits } =
 personSlice.actions;

export const selectPerson = (state) => state.person.person;
export const selectPersonCredits = (state) => state.person.personCredits;
export const selectStatus = (state) => state.person.status;

export default personSlice.reducer;
