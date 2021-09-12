import { Col, Row } from "antd";
import { ItemType } from "../../types/ItemType";
import BasketActionButtonGroup from "../basketActionButtonGroup/BasketActionButtonGroup";
import styled from "styled-components";
import ProductThumbnail from "./ProductThumbnail";
import ProductPrice from "../../components/ProductPrice";
import ProductName from "../../components/ProductName";

type Props = {
  product: ItemType;
  basketCount: number;
};

const Wrapper = styled(Col)`
  @media screen and (max-width: 768px) {
    margin-bottom: 40px;
  }
  @media screen and (max-width: 576px) {
    padding: 30px 0;
    border-radius: 2px;
    background-color: #ffffff;
  }
`;

const dummyProductImage = "https://lorempixel.com/g/400/400/nature";

const Product: React.FC<Props> = ({ product, basketCount }) => (
  <Wrapper xs={24} sm={12} md={12} lg={8} xl={6}>
    <Row justify={"center"}>
      <ProductThumbnail url={dummyProductImage} />
    </Row>
    <Row>
      <ProductPrice price={product.price} />
    </Row>
    <Row>
      <ProductName name={product.name} />
    </Row>
    <Row justify={"center"}>
      <BasketActionButtonGroup item={product} basketCount={basketCount} />
    </Row>
  </Wrapper>
);

export default Product;
