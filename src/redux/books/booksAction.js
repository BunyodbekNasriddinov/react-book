import { SET_BOOK } from "./booksType";

export const setBook = (book) => {
  return {
    type: SET_BOOK,
    payload: book,
  };
};
