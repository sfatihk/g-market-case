import React, { useState, useEffect } from "react";
import ListItems, { ResponseType } from "../../services/ListItems";
import { ItemType } from "../../types/ItemType";
import { PaginationType } from "../../types/PaginationType";
import Pagination from "../pagination/Pagination";
import { getFilters } from "../../features/filters/filtersSlice";
import { getBasketItems } from "../../features/basket/basketSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import howManyInTheBasket from "../../utils/howManyInTheBasket";
import Product from "../product/Product";
import { Row } from "antd";
import styled from "styled-components";
import { getBrands, loadBrands } from "../../features/brand/brandSlice";
import { getTags, loadTags } from "../../features/tag/tagSlice";

const Wrapper = styled(Row)`
  width: 100%;
  background-color: #ffffff;

  padding: 20px 9px;
  margin-left: 0px !important;
  margin-right: 0px !important;
  @media screen and (max-width: 576px) {
    background-color: #fafafa;
  }
`;
const ItemList = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(getFilters);
  const basket = useAppSelector(getBasketItems);
  const brands = useAppSelector(getBrands);
  const tags = useAppSelector(getTags);

  const [items, setItems] = useState<ItemType[]>([]);
  const [pagination, setPagination] = useState<PaginationType | undefined>(
    undefined
  );

  useEffect(() => {
    ListItems(filters).then((r: ResponseType | any) => {
      if (r && r.results) {
        setItems(r.results.items);

        if (brands.brands.length === 0) {
          dispatch(loadBrands(r.results.brands));
        }

        if (tags.tags.length === 0) {
          dispatch(loadTags(r.results.tags));
        }
      }
      if (r && r.meta) {
        setPagination(r.meta.pagination);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);
  return (
    <>
      <Wrapper gutter={[24, 20]}>
        {items &&
          items.map((item, i) => (
            <Product
              key={i}
              product={item}
              basketCount={howManyInTheBasket(basket, item)}
            />
          ))}
      </Wrapper>
      {pagination && <Pagination pagination={pagination} />}
    </>
  );
};

export default ItemList;
