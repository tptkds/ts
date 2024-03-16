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
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth, db } from './firebaseConfigure';
import { setUserInfo } from '@/slices/userSlice';
import {
  DocumentData,
  DocumentReference,
  DocumentSnapshot,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { get } from 'firebase/database';

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

  useEffect(() => {
    async function getUserSnapshot(user: User) {
      let userDoc: DocumentReference | null = null;
      if (user.email) userDoc = doc(db, 'users', user.email);
      if (userDoc) return await getDoc(userDoc);
    }

    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUserInfo(user));
        getUserSnapshot(user).then((userSnap) => {
          const wishlist = userSnap?.data()?.wishlist;
          dispatch(setWishlist(wishlist));
        });
      }
    });
  }, []);

  return <></>;
}
