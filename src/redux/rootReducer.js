import { combineReducers } from "redux";
import { booksReducer } from "./books/booksReducer";
import { genresReducer } from "./genres/genresReducer";
import { tokenReducer } from "./token/tokenReducer";
import { userReducer } from "./user/userReducer";

export const rootReducer = combineReducers({
  token: tokenReducer,
  user: userReducer,
  genres: genresReducer,
  books: booksReducer,
});
