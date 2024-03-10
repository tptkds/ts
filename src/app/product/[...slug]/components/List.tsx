'use client';
import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { Product } from '@/types/globalTypes';
import { useAppSelector } from '@/hooks/useAppSelector';
import {
  CATEGIRIES,
  CATEGIRIES_MATCH,
  ITEMSPERPAGE,
} from '@/constants/product';
import CartButton from './CartButton';
import { useRouter } from 'next/navigation';

export default function List() {
  const router = useRouter();
  const curCategory = useAppSelector((state) => state.product.category);
  const cartItems = useAppSelector((state) => state.product.cartItems);
  let productList: Product[] = useAppSelector(
    (state) => state.product.productList
  );
  const currentPage: number = useAppSelector(
    (state) => state.product.currentPage
  );

  const curProductList: Product[] = useMemo(() => {
    if (productList.length === 0) {
      return [];
    }
    if (curCategory === 'all') {
      return productList;
    } else {
      const cartegoryIndex: number = CATEGIRIES.findIndex(
        (v) => v === curCategory
      );
      const filteredData: Product[] = productList.filter((item) => {
        return item.category === CATEGIRIES_MATCH[cartegoryIndex];
      });
      return filteredData;
    }
  }, [productList, curCategory]);

  const startIndex: number = ITEMSPERPAGE * (currentPage - 1);
  const endIndex: number = startIndex + 9;
  const curProducts: Product[] = curProductList.slice(startIndex, endIndex);

  const handleClick = (id: number) => {
    router.push(`/product/detail/${id}`);
  };

  return (
    <div className="h-full">
      <ul className="flex flex-wrap h-full">
        {curProducts.map((v, i) => {
          return (
            <li
              key={v.id}
              className="flex-col bg-white flex flex-wrap lg:w-1/3 md:w-1/2 sm:w-full h-svh"
            >
              <div
                className=" relative w-full h-4/6 justify-center flex cursor-pointer"
                onClick={() => handleClick(v.id)}
              >
                <div className=" relative w-3/6 h-full ">
                  <Image
                    src={v.image}
                    alt={v.title}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    fill
                    style={{
                      objectFit: 'contain',
                    }}
                    priority
                  />
                </div>
                <CartButton item={v} cartItems={cartItems} />
              </div>
              <div className="px-8">
                <p className="cursor-pointer" onClick={() => handleClick(v.id)}>
                  {v.title.toUpperCase()}
                </p>
                <p>${v.price.toLocaleString()}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
