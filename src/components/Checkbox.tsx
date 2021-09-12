import { Checkbox } from "antd";
import styled from "styled-components";

const SquareCheckbox = styled(Checkbox)`
  border-radius: 2px;
  border: unset !important;
  & > span > span.ant-checkbox-inner {
    box-shadow: 0px 0px 4px 0px rgba(93, 62, 188, 0.45);
    border: unset !important;
    border-radius: 2px !important;
    background-color: #ffffff;
    border-color: #dfdee2 !important;
    width: 22px;
    height: 22px;
  }

  & > span.ant-checkbox:hover::after,
  &.ant-checkbox-wrapper:hover & > .ant-checkbox::after {
    border-radius: 2px !important;
    border: unset !important;
  }
  & > span.ant-checkbox-checked > span.ant-checkbox-inner {
    border-color: #1ea4ce !important;
    background-color: #1ea4ce;
    border: unset !important;
  }
  & > span > span.ant-checkbox-inner::after {
    border-color: #ffffff !important;
    background-color: #1ea4ce;
    left: 6px;
  }
`;

export default SquareCheckbox;
