import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { authState } from "../Types/types";

const initialState: authState = {
  authTokens: localStorage.getItem("authTokens")
    ? JSON.parse(localStorage.getItem("authTokens")!)
    : null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ accessToken: string }>) {
      const { accessToken } = action.payload;
      state.authTokens = { accessToken };
    },
    logout(state) {
      state.authTokens = null;
      state.user = null;
      localStorage.removeItem("authTokens");
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
