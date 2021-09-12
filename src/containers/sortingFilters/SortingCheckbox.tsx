import { Row } from "antd";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import CircleCheckbox from "../../components/CircleCheckbox";
import { getFilters, updateFilters } from "../../features/filters/filtersSlice";
import { FiltersType } from "../../types/FiltersType";

type Props = {
  label: string;
  sortLike?: { order: FiltersType["_order"]; sort: FiltersType["_sort"] };
};

const Wrapper = styled(Row)`
  cursor: pointer;
  margin-bottom: 16px;
  & > span {
    margin-top: 3px;
    margin-left: 12px;
    font-size: 14px;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

const SortingCheckbox: React.FC<Props> = ({ label, sortLike }) => {
  const dispatch = useAppDispatch();
  const { _order, _sort, ...filters } = useAppSelector(getFilters);
  return (
    <Wrapper
      onClick={() =>
        dispatch(
          updateFilters({
            ...filters,
            _order: sortLike?.order,
            _sort: sortLike?.sort,
          })
        )
      }
    >
      <CircleCheckbox
        checked={_order === sortLike?.order && _sort === sortLike?.sort}
      />
      <span>{label}</span>
    </Wrapper>
  );
};

export default SortingCheckbox;
