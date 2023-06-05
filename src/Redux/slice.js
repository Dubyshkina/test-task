import { createSlice } from "@reduxjs/toolkit";
import { getUsers, putUser } from "./operations";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.users = payload;
      })
      .addCase(putUser.fulfilled, (state, { payload }) => {
        const idx = state.users.findIndex((el) => el.id === payload.id);
        state.users[idx] = { ...state.users[idx], ...payload };
      })
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        // eslint-disable-next-line no-unused-vars
        (state, { payload }) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        // eslint-disable-next-line no-unused-vars
        (state, { payload }) => {
          state.isLoading = false;
          state.error = null;
        }
      );
  },
});

export const usersReducer = usersSlice.reducer;
