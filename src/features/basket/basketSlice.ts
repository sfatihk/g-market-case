import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { BasketType } from "../../types/BasketType";
import { ItemType } from "../../types/ItemType";

const initialState: BasketType = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItemToBasket: (state, action: PayloadAction<ItemType>) => {
      const newItem = action.payload;
      const itemIndex = state.items.findIndex(
        (b) => b.item.slug === newItem.slug
      );

      //if doesn't exists in basket
      if (itemIndex === -1) {
        state.items.push({ item: newItem, count: 1 });
      } else {
        state.items[itemIndex].count += 1;
      }

      return state;
    },
    reduceItemFromBasket: (state, action: PayloadAction<ItemType>) => {
      const newItem = action.payload;
      const itemIndex = state.items.findIndex(
        (b) => b.item.slug === newItem.slug
      );

      if (itemIndex !== -1) {
        state.items[itemIndex].count -= 1;
        if (state.items[itemIndex].count < 1) {
          state.items.splice(itemIndex, 1);
        }
      }

      return state;
    },
  },
});

export const { addItemToBasket, reduceItemFromBasket } = basketSlice.actions;

export const getBasketItems = (state: RootState) => state.basket;

export default basketSlice.reducer;
