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
  item,
  wishlist,
}: {
  item: Product;
  wishlist: Wishlist;
}) {
  const dispatch = useAppDispatch();
  const keysInCWishlist: string[] = Object.keys(wishlist);

  const handleClick = (e) => {
    e.stopPropagation();

    if ([...keysInCWishlist].includes(item.id.toString()))
      deleteWishlistLocalStorage([item.id.toString()]);
    else addWishlistLocalStorage(item);

    const newWishlist: Wishlist | undefined = getWishlistLocalStorage();
    if (newWishlist !== undefined) dispatch(setWishlist(newWishlist));
    else dispatch(setWishlist({}));
  };

  return (
    <button type="button" onClick={handleClick}>
      {wishlist[item.id] ? (
        <PiHeartFill style={{ fontSize: '28px' }} />
      ) : (
        <PiHeartLight style={{ fontSize: '28px' }} />
      )}
    </button>
  );
}
