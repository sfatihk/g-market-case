import styled from "styled-components";
const HeaderContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;

  align-items: center;
  justify-content: center;
  max-width: 1232px !important;
  position: relative;
  top: 0;
  @media screen and (max-width: 1668px) {
    padding: unset;
  }
`;

export default HeaderContainer;
