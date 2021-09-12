import { FiltersType } from "../types/FiltersType";

const queryStringBuilder = (data: FiltersType) => {
  let queryString = Object.entries(data)
    .map((f) => {
      if (typeof f[1] === "object") {
        return f[1].map((tag) => `${f[0]}=${tag}`).join("&");
      }

      return `${f[0]}=${f[1]}`;
    })
    .join("&");

  if (queryString.length !== 0) queryString = "?" + queryString;

  return queryString;
};

export default queryStringBuilder;
