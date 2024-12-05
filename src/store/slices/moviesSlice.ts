import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    selectedGenre: "Action",
  },
  reducers: {
    setGenre(state, action) {
      state.selectedGenre = action.payload;
    },
  },
});

export const { setGenre } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;
