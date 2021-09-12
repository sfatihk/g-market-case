import React from "react";

import { Row } from "antd";
import styled from "styled-components";
import SortPopupFilter from "./SortPopupFilter";
import ItemTypePopupFilter from "./ItemTypePopupFilter";
import TagPopupFilter from "./TagPopupFilter";
import BrandPopupFilter from "./BrandPopupFilter";

const Wrapper = styled(Row)`
  margin-bottom: 16px;
`;

const PopupFilters = () => {
  return (
    <Wrapper>
      <SortPopupFilter />
      <ItemTypePopupFilter />
      <BrandPopupFilter />
      <TagPopupFilter />
    </Wrapper>
  );
};

export default PopupFilters;
