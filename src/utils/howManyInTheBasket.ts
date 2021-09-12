import { BasketType } from "../types/BasketType";
import { ItemType } from "../types/ItemType";

const howManyInTheBasket = (basket: BasketType, targetItem: ItemType) => {
  let count = 0;

  const itemIndex = basket.items.findIndex(
    (b) => b.item.slug === targetItem.slug
  );

  if (itemIndex !== -1) {
    count = basket.items[itemIndex].count;
  }

  return count;
};

export default howManyInTheBasket;
