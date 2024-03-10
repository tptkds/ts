'use client';
import React, { useEffect } from 'react';
import { getProductList } from './apis/product';
import { useDispatch } from 'react-redux';
import { setCartItems, setProductList } from '@/slices/productSlict';
import { Product } from '@/types/globalTypes';
import { getCartItemsLocalStorage } from '@/utilities/localstorage';

export default function InitialStore() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const productList: Product[] = await getProductList();
      dispatch(setProductList(productList));
    };
    fetchData();
    dispatch(setCartItems(getCartItemsLocalStorage()));
  }, [dispatch]);
  return <></>;
}
