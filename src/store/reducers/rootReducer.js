import { combineReducers } from "redux";
import LoadingReducer from "./Loading.reducer";
import NotifyReducer from "./Notify.reducer";
import AlertReducer from "./Alert.reducer";
import AuthReducer from "./Auth.reducer";

const rootReducer = combineReducers({
  LoadingReducer,
  NotifyReducer,
  AlertReducer,
  AuthReducer,
});

export default rootReducer;
