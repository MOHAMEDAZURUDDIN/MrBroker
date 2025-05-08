import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  isAuthenticated: false,
  user: null,
  error: null,
  isUpdated: false,
  message: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
    },
    loginFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    registerRequest: (state) => {
      state.loading = true;
    },
    registerSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
    },
    registerFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    loadUserRequest: (state, action) => {
      state.loading = true;
      state.isAuthenticated = false;
    },
    loadUserSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
    },
    loadUserFail: (state) => {
      state.loading = false;
    },
    logOutSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
    },
    logOutFail: (state, action) => {
      state.error = action.payload;
    },
    updateProfileRequest: (state, action) => {
      state.loading = true;
      state.isUpdated = false;
    },
    updateProfileSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.isUpdated = true;
    },
    updateProfileFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearUpdateProfile: (state) => {
      state.isUpdated = false;
    },
    updatePasswordRequest: (state) => {
      state.loading = true;
      state.isUpdated = false;
    },
    updatePasswordSuccess: (state) => {
      state.loading = false;
      state.isUpdated = true;
    },
    updatePasswordFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    forgotPasswordRequest: (state) => {
      state.loading = true;
      state.message = null;
    },
    forgotPasswordSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    forgotPasswordFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    resetPasswordRequest: (state) => {
      state.loading = true;
    },
    resetPasswordSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    resetPasswordFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  loginRequest,
  loginSuccess,
  loginFail,
  clearError,
  registerRequest,
  registerSuccess,
  registerFail,
  loadUserRequest,
  loadUserSuccess,
  loadUserFail,
  logOutSuccess,
  logOutFail,
  updateProfileRequest,
  updateProfileSuccess,
  updateProfileFail,
  clearUpdateProfile,
  updatePasswordRequest,
  updatePasswordSuccess,
  updatePasswordFail,
  forgotPasswordRequest,
  forgotPasswordSuccess,
  forgotPasswordFail,
  resetPasswordRequest,
  resetPasswordSuccess,
  resetPasswordFail,
} = authSlice.actions;
export default authSlice.reducer;
