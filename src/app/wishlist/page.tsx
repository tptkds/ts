'use client';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { setCartItems, setWishlist } from '@/slices/productSlict';
import { CartItems, Wishlist } from '@/types/globalTypes';
import {
  addCartItemsLocalStorage,
  deleteCartItemsLocalStorage,
  deleteWishlistLocalStorage,
  getCartItemsLocalStorage,
  getWishlistLocalStorage,
} from '@/utilities/localstorage';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  PiHeartFill,
  PiShoppingBagFill,
  PiShoppingBagLight,
} from 'react-icons/pi';

export default function WishlistComponent() {
  const dispatch = useAppDispatch();
  const wishlist: Wishlist = useAppSelector((state) => state.product.wishlist);
  const keysOfWishlist = [...Object.keys(wishlist)];
  const cartItems: CartItems = useAppSelector(
    (state) => state.product.cartItems
  );
  const keysInCart: string[] = Object.keys(cartItems);

  const handleClick = (e, key: number) => {
    e.preventDefault();
    if (
      e.target.parentNode.name === 'cart' ||
      e.target.parentNode.parentNode.name === 'cart'
    ) {
      console.log(keysInCart);
      if ([...keysInCart].includes(key.toString()))
        deleteCartItemsLocalStorage([key.toString()]);
      else addCartItemsLocalStorage(wishlist[key]);
      const newCartItems: CartItems | undefined = getCartItemsLocalStorage();
      if (newCartItems !== undefined) dispatch(setCartItems(newCartItems));
      else dispatch(setCartItems({}));
    } else {
      deleteWishlistLocalStorage([key.toString()]);
      const newWishlist: Wishlist | undefined = getWishlistLocalStorage();
      if (newWishlist !== undefined) dispatch(setWishlist(newWishlist));
      else dispatch(setWishlist({}));
    }
  };

  return (
    <ul className="flex flex-wrap justify-center w-full p-2">
      {keysOfWishlist.length !== 0 ? (
        keysOfWishlist.map((key) => {
          return (
            <li
              className="card bg-base-100 shadow-xl m-8 xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2 min-w-40"
              key={key}
            >
              <div className="w-full h-40 relative">
                <Link href={`/product/${key}`}>
                  <Image
                    src={wishlist[key].image}
                    alt={wishlist[key].title}
                    fill
                    style={{
                      objectFit: 'contain',
                    }}
                  />
                </Link>
              </div>
              <div className="card-body">
                <Link href={`/product/${key}`}>
                  <h2 className="text-sm max-h-24 truncate title">
                    {wishlist[key].title}
                  </h2>

                  <p className="text-xs  max-h-24 truncate">
                    {wishlist[key].description}
                  </p>
                </Link>
                <div className="card-actions justify-end">
                  <button name="heart" onClick={(e) => handleClick(e, key)}>
                    <PiHeartFill style={{ fontSize: '28px' }} />
                  </button>
                  <button name="cart" onClick={(e) => handleClick(e, key)}>
                    {cartItems[key] ? (
                      <PiShoppingBagFill style={{ fontSize: '28px' }} />
                    ) : (
                      <PiShoppingBagLight style={{ fontSize: '28px' }} />
                    )}
                  </button>
                </div>
              </div>
            </li>
          );
        })
      ) : (
        <p>위시리스트가 비어있습니다.</p>
      )}
    </ul>
  );
}
