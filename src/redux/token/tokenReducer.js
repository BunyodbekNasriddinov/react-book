import { SET_TOKEN, REMOVE_TOKEN } from "./tokenType";

const initialState = {
  token: "",
};

export const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case REMOVE_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};
