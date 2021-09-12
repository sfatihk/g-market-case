import styled from "styled-components";

type Props = {
  price: number;
  currency?: "₺" | "$";
};
const Wrapper = styled.div`
  color: #1ea4ce;
  font-size: 14px;
  height: 23px;
`;

const ProductPrice: React.FC<Props> = ({ price = 0, currency = "₺" }) => (
  <Wrapper>
    {currency} <b>{price}</b>
  </Wrapper>
);

export default ProductPrice;
