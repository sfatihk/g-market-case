import React, { useState } from "react";

import { Modal } from "antd";

import FilterButton from "../../components/FilterButton";
import TagFilter from "../tagFilter/TagFilter";

const TagPopupFilter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Modal
        footer=""
        visible={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
      >
        <>
          <TagFilter />
        </>
      </Modal>
      <FilterButton onClick={() => setIsModalOpen(true)}>Tags</FilterButton>
    </>
  );
};

export default TagPopupFilter;
