'use client';
import React, { useEffect } from 'react';
import { getProductList } from './apis/product';
import { setCartItems, setProductList } from '@/slices/productSlict';
import { CartItems, Product, Wishlist } from '@/types/globalTypes';
import { getCartItemsLocalStorage } from '@/utilities/localstorage';
import { AppDispatch } from '@/types/reduxTypes';
import { useAppDispatch } from '@/hooks/useAppDispatch';

export default function DataInitializer() {
  const dispatch: AppDispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const productList: Product[] = await getProductList();
      dispatch(setProductList(productList));
    };
    fetchData();

    const cartItems: CartItems = getCartItemsLocalStorage();
    dispatch(setCartItems(cartItems));
  }, []);

  return <></>;
}
