import { Col, Row } from "antd";
import styled from "styled-components";
import { useAppSelector } from "../../app/hooks";
import { getBasketItems } from "../../features/basket/basketSlice";
import ShopList from "./ShopList";
import TotalAmount from "./TotalAmount";

import BasketIcon from "../../assets/images/basketColoredIcon.svg";

const Wrapper = styled(Row)`
  border: 8px solid #1ea4ce;
  border-radius: 2px;
  padding: 16px 0 16px 16px;
`;
const ShoppingCart = () => {
  const basket = useAppSelector(getBasketItems);
  return (
    <Wrapper>
      {basket && basket.items && basket.items.length === 0 && (
        <Col style={{ width: "100%", paddingRight: "16px" }}>
          <Row justify="center">
            <img src={BasketIcon} alt="" width="100" height="100" />
          </Row>
          <Row justify="center">
            <span>Your basket is empty</span>
          </Row>
        </Col>
      )}
      <ShopList />

      {basket && basket.items && basket.items.length !== 0 && (
        <Row
          justify="end"
          style={{ width: "100%", paddingRight: "16px", marginTop: "16px" }}
        >
          <TotalAmount />
        </Row>
      )}
    </Wrapper>
  );
};

export default ShoppingCart;
