import api from "../config/API";
import { BrandType } from "../types/BrandType";
import { FiltersType } from "../types/FiltersType";
import { ItemType } from "../types/ItemType";
import { PaginationType } from "../types/PaginationType";
import { TagType } from "../types/TagType";
import queryStringBuilder from "../utils/queryStringBuilder";

type MetaType = {
  total: number;
  pagination: PaginationType;
};

type ResultType = {
  brands: BrandType[];
  tags: TagType[];
  itemTypes: ItemType[];
  items: ItemType[];
};

export type ResponseType = {
  meta: MetaType;
  results: ResultType;
};

const ListItems = async (payload: FiltersType) => {
  const queryString = queryStringBuilder(payload);

  return api
    .get<ResponseType>(`/items${queryString}`)
    .then((response) => {
      if (response && response.data) return response.data as ResponseType;
    })
    .catch((error) => new Error(error.getMessage()));
};

export default ListItems;
