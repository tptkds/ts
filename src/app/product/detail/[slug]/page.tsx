'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useAppSelector } from '@/hooks/useAppSelector';
import { Product } from '@/types/globalTypes';
import { GET } from '../apis/route';
import AddCartButton from './components/AddCartButton';
import AddCartModal from './components/AddCartModal';

export default function Detail({ params }: { params: { slug: string } }) {
  const [curItem, setCurItem] = useState<Product>();

  const itemId = params.slug;

  useEffect(() => {
    const fetchData = async () => {
      const res: Product = await GET(
        `https://fakestoreapi.com/products/${itemId}`
      );
      setCurItem(res);
    };
    fetchData();
  }, []);

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
