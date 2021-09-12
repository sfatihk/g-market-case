import React, { useState, useEffect } from "react";

import { Layout, Modal, Row } from "antd";
import styled from "styled-components";
import MarketLogo from "../../assets/images/marketLogo.svg";
import BasketLogo from "../../assets/images/basketWhiteIcon.svg";
import { getBasketItems } from "../../features/basket/basketSlice";
import { useAppSelector } from "../../app/hooks";
import calculateBasketAmount from "../../utils/calculateBasketAmount";
import ShoppingCart from "../shoppingCart/ShoppingCart";
import HeaderContainer from "./HeaderContainer";
import HeaderBasketButton from "./HeaderBasketButton";
import FixedBasketButton from "./FixedBasketButton";
import Logo from "./Logo";

const Wrapper = styled(Layout.Header)`
  width: 100%;
  height: 76px;
  background-color: #1ea4ce;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0 104px;
  @media screen and (max-width: 992px) {
    padding: 0 30px;
  }
`;

const Header = () => {
  const basket = useAppSelector(getBasketItems);
  const [isBasketModalOpen, setIsBasketModalOpen] = useState(false);
  const [basketAmountString, setBasketAmountString] = useState<string>("");
  useEffect(() => {
    setBasketAmountString(calculateBasketAmount({ basket }));
  }, [basket]);
  return (
    <Wrapper>
      <HeaderContainer>
        <Logo src={MarketLogo} alt="" />
        <HeaderBasketButton onClick={() => setIsBasketModalOpen(true)}>
          <img src={BasketLogo} alt="" /> {basketAmountString}
        </HeaderBasketButton>
      </HeaderContainer>
      <Modal
        footer=""
        visible={isBasketModalOpen}
        onCancel={() => setIsBasketModalOpen(false)}
      >
        <>
          <ShoppingCart />
        </>
      </Modal>
      {basket.items.length > 0 && (
        <FixedBasketButton xs={24} sm={24} md={0}>
          <Row justify="center" onClick={() => setIsBasketModalOpen(true)}>
            Open shopping cart ( {basketAmountString} )
          </Row>
        </FixedBasketButton>
      )}
    </Wrapper>
  );
};

export default Header;
