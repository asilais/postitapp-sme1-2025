import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../Exampledata";
import axios from "axios";

//onst initialState = { value: UsersData };
const initialState = {
  user: {},
  isLoading: false,
  isSuccess: false,
  isError: false,
};
//create a thumk
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (userData) => {
    try {
      const response = axios.post("http://localhost:3001/registerUser", {
        name: userData.name,
        email: userData.email,
        password: userData.password,
      });
      const user = response.data.user;
      return user;
    } catch (error) {
      console.log(error);
    }
  }
);

export const userSlice = createSlice({
  name: "users", //name of the state
  initialState, // initial value of the state
  //   reducers: {
  //     addUser: (state, action) => {
  //       state.value.push(action.payload);
  //     },
  //     deleteUser: (state, action) => {
  //       state.value.filter((user) => user.email !== action.payload);
  //     },
  //   },

  extraReducer: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = true;
      })
      .addCase(registerUser.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
export const { addUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
