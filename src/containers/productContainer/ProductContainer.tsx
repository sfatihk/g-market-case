import styled from "styled-components";
import { Col } from "antd";
import ItemList from "../itemList/ItemList";
import ItemTypeFilter from "../itemTypeFilter/ItemTypeFilter";
import Title from "../../components/Title";
import PopupFilters from "../PopupFilter/PopupFilters";

const Wrapper = styled(Col)`
  width: 100%;
  padding: 0 !important;
  border-radius: 2px;
`;
const ProductContainer = () => (
  <Wrapper span={24}>
    <Col span={24} style={{ paddingLeft: 0 }}>
      <Title title="Products" />
    </Col>
    <Col xs={0} sm={0} md={24} style={{ paddingLeft: 0 }}>
      <ItemTypeFilter />
    </Col>
    <Col xs={24} sm={24} md={0} style={{ paddingLeft: 0 }}>
      <PopupFilters />
    </Col>
    <Col span={24} flex="auto" style={{ paddingLeft: 0, paddingRight: 0 }}>
      <ItemList />
    </Col>
  </Wrapper>
);

export default ProductContainer;
