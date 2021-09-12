import styled from "styled-components";

const CounterButton = styled.button`
  border: unset;
  background-color: unset;
  font-size: 20px;
  font-weight: 700;
  color: #1ea4ce;
  vertical-align: middle;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: unset;
  cursor: pointer;
  margin: 0 10px;
  padding: 0;
  height: 22px;

  &:active,
  &:focus,
  &::after {
    outline: unset;
    box-shadow: unset;
  }
  @media screen and (max-width: 576px) {
    font-size: 30px;
    margin: 0 15px;
  }
`;

export default CounterButton;
