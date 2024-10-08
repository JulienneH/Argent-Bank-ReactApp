import { combineReducers } from "redux";

import authentificationReducer from "../reducers/authentificationReducer";
import userProfileReducer from "../reducers/userProfileReducer";

const rootReducer = combineReducers({
  auth: authentificationReducer,
  userProfile: userProfileReducer,
});

export default rootReducer;
