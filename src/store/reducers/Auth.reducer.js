/* eslint-disable import/no-anonymous-default-export */
import { actionTypes } from "../actions/Auth.action";

const initialState = {
  credentials: {
    email: "",
    password: "",
  },
  success: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE:
      return {
        ...state,
        credentials: {
          ...state.credentials,
          ...payload,
        },
      };

    case actionTypes.SUCCESS:
      return {
        ...state,
        success: payload,
      };

    default:
      return state;
  }
};
