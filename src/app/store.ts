import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import basketReducer from "../features/basket/basketSlice";
import filtersReducer from "../features/filters/filtersSlice";
import brandReducer from "../features/brand/brandSlice";
import tagReducer from "../features/tag/tagSlice";
export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    basket: basketReducer,
    brand: brandReducer,
    tag: tagReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
