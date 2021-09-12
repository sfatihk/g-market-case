import { Row } from "antd";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Checkbox from "../../components/Checkbox";
import {
  deleteFilter,
  getFilters,
  updateFilters,
} from "../../features/filters/filtersSlice";
import { TagType } from "../../types/TagType";

type Props = {
  tag: TagType;
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

const TagCheckbox: React.FC<Props> = ({ tag }) => {
  const dispatch = useAppDispatch();
  const { tags_like, ...filters } = useAppSelector(getFilters);

  const toggleFilter = () => {
    const index = tags_like?.findIndex((b) => b === tag.name);
    const oldTagsArr = tags_like ? [...tags_like] : [];

    //if exists
    if (index === -1 || index === undefined) {
      //insert to filter array
      dispatch(
        updateFilters({
          ...filters,
          tags_like: [...oldTagsArr, tag.name],
        })
      );
    } else {
      if (typeof index === "number") {
        oldTagsArr.splice(index, 1);

        //remove from filter array
        dispatch(
          updateFilters({
            ...filters,
            tags_like: tags_like?.filter((m) => m !== tag.name),
          })
        );
      }
    }
  };
  const clearFilter = () => {
    dispatch(deleteFilter("tags_like"));
  };
  return (
    <Wrapper
      onClick={() =>
        tag.name.toUpperCase() === "ALL" ? clearFilter() : toggleFilter()
      }
    >
      <Checkbox
        checked={
          (tags_like && tags_like.some((m) => m === tag.name)) ||
          (!tags_like && tag.name.toUpperCase() === "ALL") ||
          (tags_like &&
            tag.name.toUpperCase() === "ALL" &&
            tags_like.length === 0)
        }
      />
      <span>
        {tag.name} <span>({tag.count})</span>
      </span>
    </Wrapper>
  );
};

export default TagCheckbox;
