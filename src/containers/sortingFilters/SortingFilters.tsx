import FilterGroupContainer from "../../components/FilterGroupContainer";
import FilterGroupTitle from "../../components/FilterGroupTitle";
import SortingCheckbox from "./SortingCheckbox";

const SortingFilters = () => {
  return (
    <>
      <FilterGroupTitle title={"Sorting"} />
      <FilterGroupContainer>
        <SortingCheckbox
          label={"Price low to high"}
          sortLike={{ sort: "price", order: "asc" }}
        />
        <SortingCheckbox
          label={"Price high to low"}
          sortLike={{ sort: "price", order: "desc" }}
        />
        <SortingCheckbox
          label={"New to old"}
          sortLike={{ sort: "added", order: "desc" }}
        />
        <SortingCheckbox
          label={"Old to new"}
          sortLike={{ sort: "added", order: "asc" }}
        />
        <SortingCheckbox
          label={"Default"}
          sortLike={{ sort: undefined, order: undefined }}
        />
      </FilterGroupContainer>
    </>
  );
};

export default SortingFilters;
