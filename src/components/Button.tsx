import React from "react";

import { Button } from "antd";
import styled from "styled-components";

export interface Props extends React.HTMLAttributes<HTMLElement> {
  block?: boolean;
}

const StyledButton: React.FC<Props> = styled(Button)<Props>`
  background-color: #1ea4ce;
  color: #f2f0fd;
  font-size: ${(props) => (props.block ? "12px" : "13px")};
  font-weight: 600;
  border-radius: 4px;
  height: 22px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    border-color: #1ea4ce;
    color: #1ea4ce;
  }
`;

export default StyledButton;
