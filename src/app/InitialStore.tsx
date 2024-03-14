'use client';
import React, { useEffect } from 'react';
import { getProductList } from './apis/product';
import {
  setCartItems,
  setProductList,
  setWishlist,
} from '@/slices/productSlict';
import { CartItems, Product, Wishlist } from '@/types/globalTypes';
import {
  getCartItemsLocalStorage,
  getWishlistLocalStorage,
} from '@/utilities/localstorage';
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

    const wishlist: Wishlist = getWishlistLocalStorage();
    dispatch(setWishlist(wishlist));
  }, [dispatch]);

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       // User is signed in, see docs for a list of available properties
  //       // https://firebase.google.com/docs/reference/js/auth.user
  //       console.log(user);
  //       // ...
  //     } else {
  //       console.log(user);
  //     }
  //   });
  // }, []);
  return <></>;
}
