import styled from "styled-components";

const HeaderBasketButton = styled.div`
  position: absolute;
  right: 0;
  height: 100%;
  max-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  background-color: #147594;
  font-size: 14px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export default HeaderBasketButton;
