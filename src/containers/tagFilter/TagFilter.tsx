import React, { useState } from "react";

import { useAppSelector } from "../../app/hooks";
import FilterGroupContainer from "../../components/FilterGroupContainer";
import FilterGroupTitle from "../../components/FilterGroupTitle";
import { getTags } from "../../features/tag/tagSlice";

import TagCheckbox from "./TagCheckbox";
import Input from "../../components/Input";
import FilterOptionsContainer from "../../components/FilterOptionsContainer";

const TagFilter = () => {
  const { tags } = useAppSelector(getTags);

  const [query, setQuery] = useState("");
  return (
    <>
      <FilterGroupTitle title={"Tags"} />
      <FilterGroupContainer>
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={"Search brand"}
        />
        <FilterOptionsContainer maxHeight={175}>
          {tags &&
            tags
              .filter(
                (tag) =>
                  tag.name.toUpperCase().indexOf(query.toUpperCase()) > -1 ||
                  tag.name.toUpperCase() === "ALL"
              )
              .map((tag, i) => <TagCheckbox key={i} tag={tag} />)}
        </FilterOptionsContainer>
      </FilterGroupContainer>
    </>
  );
};

export default TagFilter;
