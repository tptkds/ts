'use client';
import { useAppSelector } from '@/hooks/useAppSelector';
import { Wishlist } from '@/types/globalTypes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function WishlistComponent() {
  const wishlist: Wishlist = useAppSelector((state) => state.product.wishlist);
  const keysOfWishlist = [...Object.keys(wishlist)];
  console.log();
  return (
    <ul className="flex flex-wrap justify-center w-full p-2">
      {keysOfWishlist.map((key) => {
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
                <button className="text-sm  btn">ADD CART</button>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
