'use client';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { setCartItems } from '@/slices/productSlict';
import { CartItems, Product } from '@/types/globalTypes';
import {
  getCartItemsLocalStorage,
  addCartItemsLocalStorage,
} from '@/utilities/localstorage';
import React from 'react';

function CartButton({
  item,
  cartItems,
}: {
  item: Product;
  cartItems: CartItems;
}) {
  const dispatch = useAppDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addCartItemsLocalStorage(item);
    const newCartItems: CartItems | undefined = getCartItemsLocalStorage();
    if (newCartItems !== undefined) dispatch(setCartItems(newCartItems));
    else dispatch(setCartItems({}));
  };

  return (
    <div className="absolute bottom-0 right-0" onClick={handleClick}>
      <button> {cartItems[item.id] ? 'unCartButton' : 'CartButton'}</button>
    </div>
  );
}

export default CartButton;
