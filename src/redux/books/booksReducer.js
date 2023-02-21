import { SET_BOOK } from "./booksType";

const initialState = {
  books: [],
};

export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOK:
      return {
        ...state,
        books: action.payload,
      };

    default:
      return state;
  }
};
