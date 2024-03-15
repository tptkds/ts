'use client';
import React from 'react';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { Product, Wishlist } from '@/types/globalTypes';
import {
  addWishlistLocalStorage,
  deleteWishlistLocalStorage,
  getWishlistLocalStorage,
} from '@/utilities/localstorage';
import { PiHeart, PiHeartFill, PiHeartLight } from 'react-icons/pi';
import { setWishlist } from '@/slices/productSlict';

export default function WishlistButton({
  product,
  wishlist,
}: {
  product: Product;
  wishlist: Wishlist;
}) {
  const dispatch = useAppDispatch();
  const keysInCWishlist: string[] = Object.keys(wishlist);

  const handleClick = (e) => {
    e.stopPropagation();

    if ([...keysInCWishlist].includes(product.id.toString()))
      deleteWishlistLocalStorage([product.id.toString()]);
    else addWishlistLocalStorage(product);

    const newWishlist: Wishlist | undefined = getWishlistLocalStorage();
    if (newWishlist !== undefined) dispatch(setWishlist(newWishlist));
    else dispatch(setWishlist({}));
  };

  return (
    <button type="button" onClick={handleClick}>
      {wishlist[product.id] ? (
        <PiHeartFill style={{ fontSize: '28px' }} />
      ) : (
        <PiHeartLight style={{ fontSize: '28px' }} />
      )}
    </button>
  );
}
