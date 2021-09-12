import { Col, Row } from "antd";
import React from "react";
import styled from "styled-components";

import { useAppDispatch } from "../../app/hooks";
import { changePage } from "../../features/filters/filtersSlice";
import { PaginationType } from "../../types/PaginationType";
import PageButton from "./PageButton";

type Props = {
  pagination: PaginationType;
};

const Wrapper = styled(Row)`
  margin-top: 32px;
`;

const Pagination: React.FC<Props> = ({ pagination }) => {
  const dispatch = useAppDispatch();
  const updatePage = (page: number) => dispatch(changePage(page));
  return (
    <Wrapper justify="space-between">
      {true && (
        <PageButton
          disabled={pagination.currentPage === 1}
          onClick={() => updatePage(pagination.currentPage - 1)}
        >
          🠔 Prev
        </PageButton>
      )}
      <Col>
        {pagination &&
          pagination.pages.map((page, i) => (
            <PageButton
              key={i}
              onClick={() => updatePage(page.page)}
              disabled={page.page === 0}
              active={pagination.currentPage === page.page}
            >
              {page.label}
            </PageButton>
          ))}
      </Col>
      {true && (
        <PageButton
          disabled={pagination.currentPage === pagination.lastPage}
          onClick={() => updatePage(pagination.currentPage + 1)}
        >
          Next 🠖
        </PageButton>
      )}
    </Wrapper>
  );
};

export default Pagination;
