import { FiltersType } from "../../types/FiltersType";
import filterReducer, {
  updateFilters,
  deleteFilter,
  changePage,
} from "./filtersSlice";

describe("filter reducer", () => {
  const initialState: FiltersType = {
    _sort: "added",
    _order: "asc",
    manufacturer: "ABC",
    itemType: "XYZ",
    tags_like: ["tag1"],
    p: 2,
  };
  it("should handle initial state", () => {
    expect(filterReducer(undefined, {})).toEqual({});
  });

  it("should update filters", () => {
    const actual = filterReducer({}, updateFilters(initialState));
    expect(actual).toEqual(initialState);
  });

  it("should delete filters key", () => {
    const actual = filterReducer(initialState, deleteFilter("itemType"));
    expect(actual).not.toEqual(initialState);
  });

  it("should change page", () => {
    const actual = filterReducer(initialState, changePage(3));
    expect(actual.p).toEqual(3);
  });
});
