import styled from "styled-components";
import { useAppSelector } from "../../app/hooks";
import { getBasketItems } from "../../features/basket/basketSlice";
import calculateBasketAmount from "../../utils/calculateBasketAmount";

const Wrapper = styled.div`
  border: 2px solid #1ea4ce;
  border-radius: 2px;
  padding: 17px 24px;
  font-size: 14px;
  font-weight: 700;
  color: #1ea4ce;
`;

const TotalAmount = () => {
  const basket = useAppSelector(getBasketItems);
  return <Wrapper>{calculateBasketAmount({ basket })}</Wrapper>;
};

export default TotalAmount;
