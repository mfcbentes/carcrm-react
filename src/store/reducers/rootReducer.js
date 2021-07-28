import { combineReducers } from "redux";
import LoadingReducer from "./Loading.reducer";
import NotifyReducer from "./Notify.reducer";

const rootReducer = combineReducers({
  LoadingReducer,
  NotifyReducer,
});

export default rootReducer;
