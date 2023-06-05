import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
};
const filterReducer = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFilter: {
      reducer(state, { payload }) {
        state.filter = payload;
      },
    },
  },
});

export default filterReducer.reducer;
export const { changeFilter } = filterReducer.actions;
