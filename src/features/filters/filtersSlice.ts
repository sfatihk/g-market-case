import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { FiltersType } from "../../types/FiltersType";

const initialState: FiltersType = {};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    updateFilters: (state, action: PayloadAction<FiltersType>) => {
      state = action.payload;
      state.p = 1;
      return state;
    },
    deleteFilter: (
      state,
      action: PayloadAction<"itemType" | "manufacturer" | "tags_like">
    ) => {
      delete state[action.payload];
      state.p = 1;
      return state;
    },
    changePage: (state, action: PayloadAction<number>) => {
      state.p = action.payload;
      return state;
    },
  },
});

export const { updateFilters, deleteFilter, changePage } = filtersSlice.actions;

export const getFilters = (state: RootState) => state.filters;

export default filtersSlice.reducer;
