import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import darkModeReducer from "./slices/darkModeSlice";
import authReducer from "./slices/authSlice";

const reducer = combineReducers({
  darkmode: darkModeReducer,
  authState :authReducer,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
    