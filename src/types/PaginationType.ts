import { PageType } from "./PageType";

export type PaginationType = {
  lastPage: number;
  pages: PageType[];
  currentPage: number;
};
