import styled from "styled-components";

const Input = styled.input`
  margin-bottom: 17px;
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e0e0e0;
  border-radius: 2px;
  color: #a8a8a8;
  font-size: 14px;
  &::placeholder {
    font-family: "Open Sans", sans-serif;
    color: #a8a8a8;
    font-size: 14px;
  }
  &:active,
  &:focus,
  &:focus-visible {
    border: 2px solid #e0e0e0 !important;
    outline: none;
  }
`;

export default Input;
