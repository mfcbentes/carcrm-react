import { combineReducers } from "redux";
import LoadingReducer from "./Loading.reducer";

const rootReducer = combineReducers({
  LoadingReducer,
});

export default rootReducer;
