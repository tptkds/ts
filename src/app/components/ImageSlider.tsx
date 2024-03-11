'use client';
import { useAppSelector } from '@/hooks/useAppSelector';
import { Product } from '@/types/globalTypes';
import Image from 'next/image';
import React from 'react';

export default function ImageSlider() {
  const productList: Product[] = useAppSelector(
    (state) => state.product.productList
  );

  return (
    <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
      <div className="carousel-item">fds</div>
    </div>
  );
}
