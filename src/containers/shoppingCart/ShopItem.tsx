import { Row, Col } from "antd";
import styled from "styled-components";
import BasketActionButton from "../basketActionButtonGroup/BasketActionButtonGroup";
import Divider from "../../components/Divider";
import ProductName from "../../components/ProductName";
import ProductPrice from "../../components/ProductPrice";
import { ItemType } from "../../types/ItemType";

const Wrapper = styled(Col)`
  width: 100%;
  font-weight: 300 !important;
`;
type Props = {
  product: ItemType;
  basketCount: number;
};

const ShopItem: React.FC<Props> = ({ product, basketCount }) => {
  return (
    <Wrapper span={24}>
      <Row align="middle" justify="space-between">
        <Col span={16}>
          <ProductName name={product.name} noMargin={true} />
          <ProductPrice price={product.price} />
        </Col>
        <Col span={8}>
          <BasketActionButton item={product} basketCount={basketCount} />
        </Col>
      </Row>
      <Divider />
    </Wrapper>
  );
};

export default ShopItem;
