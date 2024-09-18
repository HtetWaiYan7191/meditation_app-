import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  isSignedIn: false,
  userName: "",
  email: "",
  error: null,
  loading: "idle",
  appTheme: "light",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default authSlice.reducer;

export const selectIsSignedIn = (state: RootState) => state.auth.isSignedIn;
export const selectAppTheme = (state: RootState) => state.auth.appTheme;
