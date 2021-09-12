import { BrandsType } from "../../types/BrandsType";

import brandReducer, { loadBrands } from "./brandSlice";

describe("brand reducer", () => {
  const initialState: BrandsType = [
    {
      name: "Brand1",
      count: 100,
    },
  ];
  it("should handle initial state", () => {
    expect(brandReducer(undefined, {})).toEqual({ brands: [] });
  });

  it("should load brands", () => {
    const actual = brandReducer({ brands: [] }, loadBrands(initialState));

    expect(actual.brands[0]).toEqual(initialState[0]);
  });
});
