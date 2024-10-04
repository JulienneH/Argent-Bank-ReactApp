import { combineReducers } from "redux";
import authentificationReducer from "./authentificationReducer";

const rootReducer = combineReducers({
  auth: authentificationReducer,
});

export default rootReducer;
