import { Button } from "antd";
import styled from "styled-components";

export interface Props extends React.HTMLAttributes<HTMLElement> {
  active?: string;
}

const FilterButton: React.FC<Props> = styled(Button)<Props>`
  width: auto;
  padding: 4px 16px;
  font-size: 13px;
  font-weight: 600;
  line-height: 0;
  vertical-align: middle;
  margin-right: 8px;
  background-color: ${(props) => (props.active ? "#1ea4ce" : "#F2F0FD")};
  outline: none;
  border: none;
  color: ${(props) => (props.active ? "#ffffff" : "#1ea4ce")};
  cursor: pointer;

  &:hover,
  &:active,
  &:focus {
    background-color: #1ea4ce;
    color: #ffffff;
  }
`;

export default FilterButton;
