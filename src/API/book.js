import axios from "axios";
import { BASE_URL } from "./url";
import { useSelector } from "react-redux";

export const book = {
  getBook: (id) => {
    const token = useSelector((state) => state.token.token);
    return axios.get(BASE_URL + "book/genreId/" + id, {
      headers: {
        Authorization: token,
      },
    });
  },
};
