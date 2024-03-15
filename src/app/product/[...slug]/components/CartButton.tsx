'use client';
import React from 'react';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { setCartItems } from '@/slices/productSlict';
import { CartItems, Product } from '@/types/globalTypes';
import {
  getCartItemsLocalStorage,
  addCartItemsLocalStorage,
  deleteCartItemsLocalStorage,
} from '@/utilities/localstorage';
import { PiHeart, PiShoppingBagFill, PiShoppingBagLight } from 'react-icons/pi';

function CartButton({
  product,
  cartItems,
}: {
  product: Product;
  cartItems: CartItems;
}) {
  const dispatch = useAppDispatch();
  const keysInCart: string[] = Object.keys(cartItems);

  const handleClick = (e) => {
    e.stopPropagation();

    if ([...keysInCart].includes(product.id.toString()))
      deleteCartItemsLocalStorage([product.id.toString()]);
    else addCartItemsLocalStorage(product);
    const newCartItems: CartItems | undefined = getCartItemsLocalStorage();
    if (newCartItems !== undefined) dispatch(setCartItems(newCartItems));
    else dispatch(setCartItems({}));
  };

  return (
    <button type="button" onClick={handleClick}>
      {cartItems[product.id] ? (
        <PiShoppingBagFill style={{ fontSize: '28px' }} />
      ) : (
        <PiShoppingBagLight style={{ fontSize: '28px' }} />
      )}
    </button>
  );
}

export default CartButton;
