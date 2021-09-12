import { Layout } from "antd";
import styled from "styled-components";

const Content = styled(Layout.Content)`
  width: 100% !important;
  padding: 0 104px;
  max-width: 1440px;
  margin-top: 40px;
  @media screen and (max-width: 992px) {
    padding: 0 30px;
  }
`;

export default Content;
