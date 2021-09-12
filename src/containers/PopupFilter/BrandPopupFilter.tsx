import React, { useState } from "react";

import { Modal } from "antd";

import FilterButton from "../../components/FilterButton";
import BrandFilter from "../brandFilter/BrandFilter";

const BrandPopupFilter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Modal
        footer=""
        visible={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
      >
        <>
          <BrandFilter />
        </>
      </Modal>
      <FilterButton onClick={() => setIsModalOpen(true)}>Brands</FilterButton>
    </>
  );
};

export default BrandPopupFilter;
