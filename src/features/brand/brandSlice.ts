import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { BrandsType } from "../../types/BrandsType";
import { BrandType } from "../../types/BrandType";

const initialState: BrandsType = {
  brands: [],
};

export const brandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {
    loadBrands: (state, action: PayloadAction<BrandType[]>) => {
      let brands = [];
      if (action.payload.length > 1) {
        brands = action.payload.sort((b1, b2) => b2.count - b1.count);
      } else {
        brands = action.payload;
      }
      state.brands = brands;
    },
  },
});

export const { loadBrands } = brandSlice.actions;

export const getBrands = (state: RootState) => state.brand;

export default brandSlice.reducer;
