import { Row } from "antd";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Checkbox from "../../components/Checkbox";
import {
  deleteFilter,
  getFilters,
  updateFilters,
} from "../../features/filters/filtersSlice";
import { BrandType } from "../../types/BrandType";

type Props = {
  brand: BrandType;
};

const Wrapper = styled(Row)`
  cursor: pointer;
  margin-bottom: 18px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: initial;
  & > span {
    margin-top: 3px;
    margin-left: 12px;
    font-size: 14px;
    & > span {
      color: #a8a8a8;
    }
  }
`;

const BrandCheckbox: React.FC<Props> = ({ brand }) => {
  const dispatch = useAppDispatch();
  const { manufacturer, ...filters } = useAppSelector(getFilters);

  const toggleFilter = () => {
    const index = manufacturer?.findIndex((b) => b === brand.name);
    const oldManufacturerArr = manufacturer ? [...manufacturer] : [];

    //if exists
    if (index === -1 || index === undefined) {
      //insert to filter array
      dispatch(
        updateFilters({
          ...filters,
          manufacturer: [...oldManufacturerArr, brand.name],
        })
      );
    } else {
      if (typeof index === "number") {
        oldManufacturerArr.splice(index, 1);

        //remove from filter array
        dispatch(
          updateFilters({
            ...filters,
            manufacturer: manufacturer?.filter((m) => m !== brand.name),
          })
        );
      }
    }
  };
  const clearFilter = () => {
    dispatch(deleteFilter("manufacturer"));
  };
  return (
    <Wrapper
      onClick={() =>
        brand.name.toUpperCase() === "ALL" ? clearFilter() : toggleFilter()
      }
    >
      <Checkbox
        checked={
          (manufacturer && manufacturer.some((m) => m === brand.name)) ||
          (!manufacturer && brand.name.toUpperCase() === "ALL") ||
          (manufacturer &&
            brand.name.toUpperCase() === "ALL" &&
            manufacturer.length === 0)
        }
      />
      <span>
        {brand.name} <span>({brand.count})</span>
      </span>
    </Wrapper>
  );
};

export default BrandCheckbox;
