import { BasketType } from "../types/BasketType";

type Props = {
  basket: BasketType;
  currency?: "₺" | "$";
};
const calculateBasketAmount = ({ basket, currency = "₺" }: Props) => {
  const totalAmount = basket.items
    .reduce(
      (prevItem, currItem) => prevItem + currItem.count * currItem.item.price,
      0
    )
    .toFixed(2);
  return `${currency}${totalAmount}`;
};

export default calculateBasketAmount;
