import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  isSignedIn: false,
  userName: "",
  email: "",
  error: null,
  loading: "idle",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default authSlice.reducer;

export const selectIsSignedIn = (state: RootState) => state.auth.isSignedIn;
