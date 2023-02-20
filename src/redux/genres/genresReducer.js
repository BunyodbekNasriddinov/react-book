import { SET_GENRES, REMOVE_GENRES } from "./genresTypes";

const initialState = {
  genres: "",
};

export const genresReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    case REMOVE_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    default:
      return state;
  }
};
