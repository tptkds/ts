'use client';
import React from 'react';
import List from './List';
import { Product } from '@/types/globalTypes';
import { useDispatch } from 'react-redux';
import { setProducts } from '@/slices/productSlict';
import Pagenation from './Pagenation';

function ProductPage({
  products,
  totalItems,
}: {
  products: Product[];
  totalItems: number;
}) {
  const dispatch = useDispatch();
  dispatch(setProducts(products));
  return (
    <>
      <List />
      <Pagenation totalItems={totalItems} />
    </>
  );
}

export default ProductPage;
