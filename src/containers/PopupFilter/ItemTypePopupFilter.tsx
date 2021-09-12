import React, { useState } from "react";

import { Modal } from "antd";
import SortingFilters from "../sortingFilters/SortingFilters";
import FilterButton from "../../components/FilterButton";
import styled from "styled-components";

const Span = styled.div`
  color: #1ea4ce !important;
  font-family: "Open Sans", sans-serif;
  margin-bottom: 10px;
`;
const ItemTypePopupFilter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Modal
        footer=""
        visible={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
      >
        <>
          <Span>Please choose item type :</Span>
          <SortingFilters />
        </>
      </Modal>
      <FilterButton onClick={() => setIsModalOpen(true)}>
        Item Type
      </FilterButton>
    </>
  );
};

export default ItemTypePopupFilter;
