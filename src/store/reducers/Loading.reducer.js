/* eslint-disable import/no-anonymous-default-export */
import { actionTypes } from "../actions/Loading.action";

const initialState = {
  open: true,
  msg: "Carregando...",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE:
      return { ...state, ...payload };

    default:
      return state;
  }
};
