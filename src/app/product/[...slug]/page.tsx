'use client';
import React, { useEffect, useState } from 'react';
import List from './components/List';
import { Product } from '@/types/globalTypes';
import {
  setCartItems,
  setCurrentPage,
  setProductList,
  setCategory,
} from '@/slices/productSlict';
import Pagenation from './components/Pagenation';
import { useAppSelector } from '@/hooks/useAppSelector';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { getCartItemsLS } from '@/utilities/localstorage';
import { AppDispatch } from '@/types/reduxTypes';
import { GET } from '@/app/product/apis/route';
import { getProductUrl } from '@/utilities/product';

function ProductPage({ params }: { params: { slug: string } }) {
  const dispatch: AppDispatch = useAppDispatch();
  const prevCategory: string = useAppSelector(
    (state) => state.product.category
  );
  const curCategory: string = params.slug[0];
  const urlForAPI: string = getProductUrl(curCategory);
  const curPage: number = Number(params.slug[1]);

  useEffect(() => {
    dispatch(setCartItems(getCartItemsLS()));
    const fetchData = async () => {
      const json: Product[] = await GET(urlForAPI);
      dispatch(setProductList(json));
      dispatch(setCategory(curCategory));
    };
    if (prevCategory !== curCategory) fetchData();
    dispatch(setCurrentPage(curPage));
  }, []);

  return (
    <>
      <List />
      <Pagenation />
    </>
  );
}

export default ProductPage;
