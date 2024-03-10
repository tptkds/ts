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
    console.log(productList);
    const item: Product | undefined = productList.find(
      (item) => item.id == params.slug
    );
    console.log(item);
    setCurItem(item);
  }, [productList, params.slug]);

  if (!curItem) {
    return;
  }
  return (
    <div className="h-svh flex p-24">
      <div className=" relative w-3/6 h-full">
        <Image
          src={curItem?.image}
          alt={curItem?.title}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          style={{
            objectFit: 'contain',
          }}
        />
      </div>
      <div>
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
