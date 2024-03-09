'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useAppSelector } from '@/hooks/useAppSelector';
import { Product } from '@/types/globalTypes';
import { GET } from '../apis/route';

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
  console.log(curItem);
  return (
    <div className="h-svh flex ">
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
      <div>{curItem.title}</div>
    </div>
  );
}
