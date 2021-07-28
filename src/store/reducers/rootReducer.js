import { combineReducers } from "redux";
import LoadingReducer from "./Loading.reducer";
import NotifyReducer from "./Notify.reducer";
import AlertReducer from "./Alert.reducer";

const rootReducer = combineReducers({
  LoadingReducer,
  NotifyReducer,
  AlertReducer,
});

export default rootReducer;
