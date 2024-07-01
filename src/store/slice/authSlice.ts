import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProfile } from "../../types/app";
import { LoginAsync, getProfileAsync } from "../async/auth";

interface IAuthState {
  //   isAuthenticated: boolean;
  user: IProfile | null | undefined;
  token: string;
  loading: boolean;
  errorMessage: string;
}

const initialState: IAuthState = {
  token: "",
  user: undefined,
  loading: false,
  errorMessage: "",
  //   isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_LOGIN: (
      state,
      action: PayloadAction<{ user: IProfile; token: string }>
    ) => {
      (state.user = action.payload.user), (state.token = action.payload.token);
    },
    SET_LOGOUT: (state) => {
      localStorage.removeItem("token");
      state.user = undefined;
      state.token = "";
    },
  },

  extraReducers(builder) {
    // login process
    builder.addCase(LoginAsync.pending, (state) => {
      state.token = "";
      state.loading = true;
    });

    builder.addCase(LoginAsync.fulfilled, (state, action) => {
      console.log(action.payload);
      state.loading = false;
      state.token = action.payload;
    });

    builder.addCase(LoginAsync.rejected, (state, action) => {
      state.loading = false;
      state.token = "";
      state.errorMessage = action.payload as string;
    });

    // get profile process
    builder.addCase(getProfileAsync.pending, (state) => {
      state.user = undefined;
      state.loading = true;
    });

    builder.addCase(getProfileAsync.fulfilled, (state, action) => {
      console.log(action.payload);
      state.loading = false;
      state.user = action.payload;
    });

    builder.addCase(getProfileAsync.rejected, (state, action) => {
      state.loading = false;
      state.user = undefined;
      state.token = "";
      state.errorMessage = action.payload as string;
    });
  },
});

export const { SET_LOGIN, SET_LOGOUT } = authSlice.actions;
export default authSlice.reducer;
