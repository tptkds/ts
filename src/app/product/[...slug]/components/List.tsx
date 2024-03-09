'use client';
import React from 'react';
import Image from 'next/image';
import { Product } from '@/types/globalTypes';
import { useAppSelector } from '@/hooks/useAppSelector';
import { ITEMSPERPAGE } from '@/constants/product';
import CartButton from './CartButton';
import { useRouter } from 'next/navigation';

export default function List() {
  const router = useRouter();
  const cartItems = useAppSelector((state) => state.product.cartItems);
  const productList: Product[] = useAppSelector(
    (state) => state.product.productList
  );
  const currentPage: number = useAppSelector(
    (state) => state.product.currentPage
  );

  const startIndex: number = ITEMSPERPAGE * (currentPage - 1);
  const endIndex: number = startIndex + 9;
  const curProducts: Product[] = productList.slice(startIndex, endIndex);

  const handleClick = (id: string) => {
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
                className=" relative w-full h-4/6 justify-center flex"
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
                <p>{v.title.toUpperCase()}</p>
                <p>${v.price.toLocaleString()}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
