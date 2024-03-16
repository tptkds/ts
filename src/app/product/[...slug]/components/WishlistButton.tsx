'use client';
import React from 'react';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { Product, Wishlist } from '@/types/globalTypes';
import { PiHeartFill, PiHeartLight } from 'react-icons/pi';
import { setWishlist } from '@/slices/productSlict';
import { deleteDoc, deleteField, doc, updateDoc } from 'firebase/firestore';
import { db } from '@/app/firebaseConfigure';
import { userInfo } from 'os';
import { useAppSelector } from '@/hooks/useAppSelector';

export default function WishlistButton({
  product,
  wishlist,
}: {
  product: Product;
  wishlist: Wishlist;
}) {
  const userInfo = useAppSelector((state) => state.user.userInfo);
  const dispatch = useAppDispatch();
  const keysInCWishlist: string[] = Object.keys(wishlist);

  const handleClick = (e: any) => {
    e.stopPropagation();

    if ([...keysInCWishlist].includes(product.id.toString())) {
      let newWishlist: Wishlist = { ...wishlist };
      delete newWishlist[product.id];
      let userRef = null;
      if (userInfo?.email) userRef = doc(db, 'users', userInfo?.email);
      if (userRef)
        updateDoc(userRef, {
          wishlist: newWishlist,
        }).then(() => {
          dispatch(setWishlist(newWishlist));
        });
    } else {
      const newWishlist: Wishlist = { ...wishlist, [product.id]: product };
      let userRef = null;
      if (userInfo?.email) userRef = doc(db, 'users', userInfo?.email);
      if (userRef)
        updateDoc(userRef, {
          wishlist: newWishlist,
        }).then(() => {
          dispatch(setWishlist(newWishlist));
        });
    }

    // if (newWishlist !== undefined) dispatch(setWishlist(newWishlist));
    // else dispatch(setWishlist({}));
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
