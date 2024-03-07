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

function ProductPage({ products, url }: { products: Product[]; url: string }) {
  const dispatch = useAppDispatch();
  const prevUrl = useAppSelector((state) => state.product.url);
  useEffect(() => {
    if (prevUrl !== url) {
      dispatch(setProducts(products));
      dispatch(setUrl(url));
      dispatch(setCurrentPage(1));
    }
  }, [url]);

  useEffect(() => {
    dispatch(setCartItems(getCartItemsLS()));
  }, []);

  return (
    <>
      <List />
      <Pagenation />
    </>
  );
}

export default ProductPage;
