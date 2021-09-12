import { Row } from "antd";
import styled from "styled-components";

type Props = {
  title: string;
};
const Wrapper = styled(Row)`
  color: #697488;
  font-size: 13px;
  font-weight: 600;
`;

const FilterGroupTitle: React.FC<Props> = ({ title }) => (
  <Wrapper>{title}</Wrapper>
);

export default FilterGroupTitle;
