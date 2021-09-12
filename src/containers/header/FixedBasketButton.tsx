import { Col } from "antd";
import styled from "styled-components";

const FixedBasketButton = styled(Col)`
  position: fixed;
  z-index: 1;
  width: 100%;
  bottom: 0;
  left: 0;
  background: #147594;
  font-size: 20px;
  cursor: pointer;
`;

export default FixedBasketButton;
