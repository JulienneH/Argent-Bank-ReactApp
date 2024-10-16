import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../redux/actions/reducers/userReducer";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
