import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface AuthState {
  isSignedIn: boolean;
  userName: string;
  email: string;
  error: string | null;
  loading: string;
  appTheme: "light" | "dark";
}

const initialState: AuthState = {
  isSignedIn: true,
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
  extraReducers: (builder) => {},
});

export default authSlice.reducer;

export const selectIsSignedIn = (state: RootState) => state.auth.isSignedIn;
export const selectAppTheme = (state: RootState) => state.auth.appTheme;
