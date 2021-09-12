import styled from "styled-components";

export interface Props extends React.HTMLAttributes<HTMLElement> {
  active?: boolean;
  disabled?: boolean;
}

const PageButton: React.FC<Props> = styled.button<Props>`
  height: 40px;
  width: auto;
  padding: 12px;
  font-size: 14px;
  font-weight: 600;
  line-height: 0;
  vertical-align: middle;
  background-color: ${(props) => (props.active ? "#1ea4ce" : "unset")};
  border: unset;
  color: ${(props) => (props.active ? "#ffffff" : "#697488")};
  cursor: pointer;
  &:disabled {
    cursor: default;
  }
  &:hover {
    color: ;
    color: ${(props) => (props.active ? "#ffffff" : "#1ea4ce")};
  }
  &:disabled + &:hover {
    color: #697488;
  }

  @media screen and (max-width: 576px) {
    font-size: 14px;
    padding: 5px;
  }
`;

export default PageButton;
