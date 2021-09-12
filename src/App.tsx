import React from "react";
import "./App.css";
import { Row, Col } from "antd";
import Layout from "./components/Layout";
import Content from "./components/Content";
import Header from "./containers/header/Header";
import Footer from "./components/Footer";
import ProductContainer from "./containers/productContainer/ProductContainer";
import ShoppingCart from "./containers/shoppingCart/ShoppingCart";
import SortingFilters from "./containers/sortingFilters/SortingFilters";
import BrandFilter from "./containers/brandFilter/BrandFilter";
import TagFilter from "./containers/tagFilter/TagFilter";

const App = () => (
  <Layout>
    <Header />
    <Content>
      <Row gutter={16}>
        <Col xs={0} sm={0} md={8} lg={8} xl={6}>
          <SortingFilters />
          <BrandFilter />
          <TagFilter />
        </Col>
        <Col sm={24} md={16} lg={16} xl={12}>
          <ProductContainer />
        </Col>
        <Col xs={0} sm={0} md={0} lg={0} xl={6}>
          <ShoppingCart />
        </Col>
      </Row>
    </Content>
    <Footer />
  </Layout>
);

export default App;
