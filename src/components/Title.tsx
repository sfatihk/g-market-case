import styled from "styled-components";

type Props = {
  title: string;
};

const Wrapper = styled.div`
  margin-bottom: 16px;
  font-size: 20px;
  color: #6f6f6f;
`;

const Title: React.FC<Props> = ({ title }) => <Wrapper>{title}</Wrapper>;

export default Title;
