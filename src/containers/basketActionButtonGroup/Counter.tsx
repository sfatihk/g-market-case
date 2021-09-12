import styled from "styled-components";

type Props = {
  count: number;
};
const Wrapper = styled.div`
  background-color: #1ea4ce;
  color: #f2f0fd;
  font-size: 12px;
  font-weight: 600;
  height: 22px;
  padding: 5px 10px;
  vertical-align: middle;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Counter: React.FC<Props> = ({ count }) => <Wrapper>{count}</Wrapper>;

export default Counter;
