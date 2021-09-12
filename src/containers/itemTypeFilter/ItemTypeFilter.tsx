import { Row } from "antd";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  deleteFilter,
  getFilters,
  updateFilters,
} from "../../features/filters/filtersSlice";
import FilterButton from "../../components/FilterButton";

const Wrapper = styled(Row)`
  margin-bottom: 16px;
`;

const ItemTypeFilter = () => {
  const filters = useAppSelector(getFilters);
  const dispatch = useAppDispatch();

  return (
    <Wrapper>
      <FilterButton
        active={filters.itemType === "mug" ? "active" : ""}
        onClick={() => {
          dispatch(
            updateFilters({
              ...filters,
              itemType: "mug",
            })
          );
        }}
      >
        mug
      </FilterButton>
      <FilterButton
        active={filters.itemType === "shirt" ? "active" : ""}
        onClick={() => {
          dispatch(
            updateFilters({
              ...filters,
              itemType: "shirt",
            })
          );
        }}
      >
        shirt
      </FilterButton>
      {filters.itemType && (
        <FilterButton
          active={""}
          onClick={() => {
            dispatch(deleteFilter("itemType"));
          }}
        >
          clear
        </FilterButton>
      )}
    </Wrapper>
  );
};

export default ItemTypeFilter;
