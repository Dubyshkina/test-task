import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://64635d734dca1a66135ba7bc.mockapi.io";
export const getUsers = createAsyncThunk("users/get", async (_, thunkAPI) => {
  try {
    const { data } = await axios.get("/users");
    return data.sort((b, a) => a.followers - b.followers);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const putUser = createAsyncThunk(
  "users/put",
  async ({ id, followers }, thunkAPI) => {
    try {
      const { data } = await axios.put(`/users/${id}`, {
        followers,
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
