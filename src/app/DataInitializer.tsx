'use client';
import React, { useContext, useEffect, useState } from 'react';
import { getProductList } from './apis/product';
import { setCartItems, setProductList } from '@/slices/productSlict';
import { CartItems, Product } from '@/types/globalTypes';
import { getCartItemsLocalStorage } from '@/utilities/localstorage';
import { AppDispatch } from '@/types/reduxTypes';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { AuthContext } from './AuthProvider';

export default function DataInitializer({
  children,
}: {
  children: React.ReactNode;
}) {
  const { currentUser } = useContext(AuthContext);
  const dispatch: AppDispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const productList: Product[] = await getProductList();
      dispatch(setProductList(productList));

      if (!currentUser) {
        const cartItems: CartItems = getCartItemsLocalStorage();
        dispatch(setCartItems(cartItems));
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return null;
  }

  return <>{children}</>;
}
