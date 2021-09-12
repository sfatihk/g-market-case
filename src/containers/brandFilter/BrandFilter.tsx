import React, { useState } from "react";

import { useAppSelector } from "../../app/hooks";
import FilterGroupContainer from "../../components/FilterGroupContainer";
import FilterGroupTitle from "../../components/FilterGroupTitle";
import { getBrands } from "../../features/brand/brandSlice";

import BrandCheckbox from "./BrandCheckbox";
import Input from "../../components/Input";
import FilterOptionsContainer from "../../components/FilterOptionsContainer";

const BrandFilter = () => {
  const { brands } = useAppSelector(getBrands);

  const [query, setQuery] = useState("");
  return (
    <>
      <FilterGroupTitle title={"Brands"} />
      <FilterGroupContainer>
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={"Search brand"}
        />
        <FilterOptionsContainer maxHeight={175}>
          {brands &&
            brands
              .filter(
                (brand) =>
                  brand.name.toUpperCase().indexOf(query.toUpperCase()) > -1 ||
                  brand.name.toUpperCase() === "ALL"
              )
              .map((brand, i) => <BrandCheckbox key={i} brand={brand} />)}
        </FilterOptionsContainer>
      </FilterGroupContainer>
    </>
  );
};

export default BrandFilter;
