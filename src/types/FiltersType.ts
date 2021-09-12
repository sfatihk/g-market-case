export type FiltersType = {
  _sort?: "added" | "price";
  _order?: "asc" | "desc";
  manufacturer?: string[];
  itemType?: string;
  tags_like?: string[];
  p?: number;
};
