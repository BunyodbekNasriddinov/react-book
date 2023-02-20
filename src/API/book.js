import axios from "axios";
import { BASE_URL } from "./url";

export const book = {
  userRegister: async (user) => {
    const data = await axios.post(BASE_URL + "/user/register", user);
    if (data.status === 201) {
      console.log(data);
    }
  },
};
