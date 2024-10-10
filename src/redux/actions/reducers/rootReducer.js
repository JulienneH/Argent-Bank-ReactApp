import { combineReducers } from "redux";

import authentificationReducer from "../reducers/authentificationReducer";

const rootReducer = combineReducers({
  auth: authentificationReducer,
});

export default rootReducer;
