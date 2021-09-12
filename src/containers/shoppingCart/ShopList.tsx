import styled from "styled-components";
import { useAppSelector } from "../../app/hooks";
import { getBasketItems } from "../../features/basket/basketSlice";
import ShopItem from "./ShopItem";

const Wrapper = styled.div`
  width: 100%;
  max-height: 360px;
  padding-right: 16px;
  overflow-y: auto;
  overflow-x: hidden;
  color: #1ea4ce;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: #cacaca;
    border-radius: 4px;
  }
`;
const ShopList = () => {
  const basket = useAppSelector(getBasketItems);
  return (
    <Wrapper>
      {basket &&
        basket.items &&
        basket.items.map((b, i) => (
          <ShopItem key={b.item.slug} product={b.item} basketCount={b.count} />
        ))}
    </Wrapper>
  );
};

export default ShopList;
