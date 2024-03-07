'use client';
import React, { useEffect } from 'react';
import List from './List';
import { Product } from '@/types/globalTypes';
import {
  setCartItems,
  setCurrentPage,
  setProducts,
  setUrl,
} from '@/slices/productSlict';
import Pagenation from './Pagenation';
import { useAppSelector } from '@/hooks/useAppSelector';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { getCartItemsLS } from '@/utilities/localstorage';
import { AppDispatch } from '@/types/reduxTypes';

function ProductPage({ products, url }: { products: Product[]; url: string }) {
  const dispatch: AppDispatch = useAppDispatch();
  const prevUrl: string = useAppSelector((state) => state.product.url);

  useEffect(() => {
    dispatch(setCartItems(getCartItemsLS()));
  }, []);

  useEffect(() => {
    if (prevUrl !== url) {
      dispatch(setProducts(products));
      dispatch(setUrl(url));
      dispatch(setCurrentPage(1));
    }
  }, [url]);

  return (
    <>
      <List />
      <Pagenation />
    </>
  );
}

export default ProductPage;
