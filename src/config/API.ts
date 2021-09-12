import { create } from "apisauce";
import SERVER_URL from "./SERVER_URL";

const api = create({
  baseURL: `${SERVER_URL}`,
  headers: {
    Accept: `application/json`,
  },
});

export default api;
