import styled from "styled-components";

type Props = {
  name: string;
  noMargin?: boolean;
};
const Wrapper: React.FC<Props> = styled.div<Props>`
  color: #191919;
  font-size: 14px;
  font-weight: 600;
  height: ${(props) => (props.noMargin ? "auto" : "43px")};
  margin-bottom: ${(props) => (props.noMargin ? "auto" : "8px")};
`;

const characterLimit = 30;
const ProductName: React.FC<Props> = ({ name, noMargin }) => (
  <Wrapper noMargin={noMargin} name={name}>
    {name.length > characterLimit
      ? name.slice(name.length - characterLimit - 3) + "..."
      : name}
  </Wrapper>
);

export default ProductName;
