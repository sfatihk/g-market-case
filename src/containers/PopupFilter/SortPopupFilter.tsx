import React, { useState } from "react";

import { Modal } from "antd";
import SortingFilters from "../sortingFilters/SortingFilters";
import FilterButton from "../../components/FilterButton";

const SortPopupFilter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Modal
        footer=""
        visible={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
      >
        <>
          <SortingFilters />
        </>
      </Modal>
      <FilterButton onClick={() => setIsModalOpen(true)}>Sort</FilterButton>
    </>
  );
};

export default SortPopupFilter;
