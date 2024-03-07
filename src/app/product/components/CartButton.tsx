'use client';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { setCartItems } from '@/slices/productSlict';
import { CartItems, Product } from '@/types/globalTypes';
import { getCartItemsLS, setCartItemsLS } from '@/utilities/localstorage';
import React from 'react';

function CartButton({
  item,
  cartItems,
}: {
  item: Product;
  cartItems: CartItems;
}) {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    setCartItemsLS(item);
    const newCartItems: CartItems | undefined = getCartItemsLS();
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
