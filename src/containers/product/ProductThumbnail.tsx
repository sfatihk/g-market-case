import { Avatar } from "antd";
import styled from "styled-components";

type Props = {
  url: string;
};
const Wrapper = styled.div`
  border: 1.18px solid #f3f0fe;
  border-radius: 12px;
  padding: 15px;
  margin-bottom: 7px;
  text-align: left;
`;
const ProductThumbnail: React.FC<Props> = ({ url }) => (
  <Wrapper>
    <Avatar
      style={{ backgroundColor: "#C4C4C4" }}
      src={url}
      shape="square"
      size={{ xs: 128, sm: 92, md: 92, lg: 92, xl: 92, xxl: 92 }}
    />
  </Wrapper>
);
export default ProductThumbnail;
