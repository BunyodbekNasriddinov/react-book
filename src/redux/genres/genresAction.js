import { SET_GENRES, REMOVE_GENRES } from "./genresTypes";

export const setGenres = (token) => {
  return {
    type: SET_GENRES,
    payload: token,
  };
};

export const removeGenres = () => {
  return {
    type: REMOVE_GENRES,
    payload: "",
  };
};
