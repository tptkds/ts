'use client';
import React, { useContext } from 'react';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { setCartItems } from '@/slices/productSlict';
import { CartItems, Product } from '@/types/globalTypes';
import {
  getCartItemsLocalStorage,
  addCartItemsLocalStorage,
  deleteCartItemsLocalStorage,
} from '@/utilities/localstorage';
import { PiHeart, PiShoppingBagFill, PiShoppingBagLight } from 'react-icons/pi';
import { AuthContext } from '@/app/AuthProvider';
import { userInfo } from 'os';
import { db } from '@/app/firebaseConfig';
import { doc, updateDoc } from 'firebase/firestore';

function CartButton({
  product,
  cartItems,
}: {
  product: Product;
  cartItems: CartItems;
}) {
  const dispatch = useAppDispatch();
  const keysInCart: string[] = Object.keys(cartItems);
  const { currentUser } = useContext(AuthContext);
  const toggleCartItem = (e: any) => {
    e.stopPropagation();

    if (currentUser) {
      if ([...keysInCart].includes(product.id.toString())) {
        let newCartItems: CartItems = { ...cartItems };
        delete newCartItems[product.id];
        let userRef = null;
        if (currentUser?.email) userRef = doc(db, 'users', currentUser?.email);
        if (userRef)
          updateDoc(userRef, {
            cartItems: newCartItems,
          }).then(() => {
            dispatch(setCartItems(newCartItems));
          });
      } else {
        const newCartItems: CartItems = {
          ...cartItems,
          [product.id]: { product: product, count: 1 },
        };
        let userRef = null;
        if (currentUser?.email) userRef = doc(db, 'users', currentUser?.email);
        if (userRef)
          updateDoc(userRef, {
            cartItems: newCartItems,
          }).then(() => {
            dispatch(setCartItems(newCartItems));
          });
      }
    } else {
      if ([...keysInCart].includes(product.id.toString()))
        deleteCartItemsLocalStorage([product.id.toString()]);
      else addCartItemsLocalStorage(product);
      const newCartItems: CartItems | undefined = getCartItemsLocalStorage();
      if (newCartItems !== undefined) dispatch(setCartItems(newCartItems));
      else dispatch(setCartItems({}));
    }
  };

  return (
    <button type="button" onClick={toggleCartItem}>
      {cartItems[product.id] ? (
        <PiShoppingBagFill style={{ fontSize: '28px' }} />
      ) : (
        <PiShoppingBagLight style={{ fontSize: '28px' }} />
      )}
    </button>
  );
}

export default CartButton;
