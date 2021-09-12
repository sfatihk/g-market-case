import { Layout } from "antd";
import styled from "styled-components";

const Wrappper = styled(Layout.Footer)`
  width: 100%;
  background-color: unset;
  margin-top: 100px;
  text-align: center;
`;

const Footer = () => <Wrappper> ©2019 Market • Privacy Policy</Wrappper>;

export default Footer;
