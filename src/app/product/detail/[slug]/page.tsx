'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useAppSelector } from '@/hooks/useAppSelector';
import { Product } from '@/types/globalTypes';

import AddCartButton from './components/AddCartButton';

export default function Detail({ params }: { params: { slug: number } }) {
  const [curItem, setCurItem] = useState<Product>();
  const productList: Product[] = useAppSelector(
    (state) => state.product.productList
  );

  useEffect(() => {
    const item: Product | undefined = productList.find(
      (item) => item.id == params.slug
    );
    setCurItem(item);
  }, [productList, params.slug]);

  if (!curItem) {
    return;
  }
  return (
    <div className="h-80svh flex p-20 justify-center">
      <div className="  w-3/6 h-full flex justify-center items-start">
        <div className="relative w-4/6 h-4/6">
          <Image
            src={curItem?.image}
            alt={curItem?.title}
            fill
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
      </div>
      <div className="w-3/6">
        <p>{curItem.title}</p>
        <p className="py-2.5">{curItem.description}</p>
        <p>{curItem.price}</p>
        <div className="flex flex-col">
          <button>BUY NOW</button>
          <AddCartButton item={curItem} />
        </div>
      </div>
    </div>
  );
}
