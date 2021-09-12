import styled from "styled-components";

type Props = {
  maxHeight?: number;
};
const FilterOptionsContainer: React.FC<Props> = styled.div<Props>`
  width: 100%;
  padding: 0 3px;
  max-height: ${(props) =>
    props.maxHeight ? `${props.maxHeight}px` : "222px"};
  overflow: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: #e0e0e0;
    border-radius: 4px;
  }
`;

export default FilterOptionsContainer;
