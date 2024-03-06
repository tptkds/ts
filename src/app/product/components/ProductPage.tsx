'use client';
import React from 'react';
import List from './List';
import { Product } from '@/types/globalTypes';
import { setCurrentPage, setProducts, setUrl } from '@/slices/productSlict';
import Pagenation from './Pagenation';
import { useAppSelector } from '@/hooks/useAppSelector';
import { useAppDispatch } from '@/hooks/useAppDispatch';

function ProductPage({ products, url }: { products: Product[]; url: string }) {
  const dispatch = useAppDispatch();
  dispatch(setProducts(products));
  const prevUrl = useAppSelector((state) => state.product.url);
  if (prevUrl !== url) {
    dispatch(setProducts(products));
    dispatch(setUrl(url));
    dispatch(setCurrentPage(1));
  }
  return (
    <>
      <List />
      <Pagenation />
    </>
  );
}

export default ProductPage;
