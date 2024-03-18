'use client';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { usePathname } from 'next/navigation';

export default function Loading() {
  const productListSkeleton = (
    <ul className="mt-28 grid grid-cols-1 gap-8 min-h-screen sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: 12 }).map((_, index) => (
        <li key={index} className="relative h-full animate-pulse pb-24">
          <div className="h-4/5 mb-4">
            <Skeleton height="100%" />
          </div>
          <div>
            <Skeleton height={20} width={`60%`} />
          </div>
          <div className="mt-2 mb-24">
            <Skeleton height={20} width={`30%`} />
          </div>
        </li>
      ))}
    </ul>
  );

  const detailPageSkeleton = (
    <div className="mt-28 min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl p-5">
        {/* 제품 이미지 */}
        <Skeleton height={400} />
        {/* 제품 제목 */}
        <Skeleton height={30} width={`60%`} className="mt-5" />
        {/* 제품 설명 */}
        <Skeleton count={3} className="mt-5" />
        {/* 가격 */}
        <Skeleton width={`20%`} className="mt-5" />
        {/* 구매 및 장바구니 버튼 */}
        <div className="flex mt-5">
          <Skeleton height={50} width={`30%`} className="mr-2" />
          <Skeleton height={50} width={`30%`} />
        </div>
      </div>
    </div>
  );

  const pathname = usePathname();

  return (
    <>
      {pathname.startsWith('/product/') && (
        <div className="min-h-screen">{productListSkeleton}</div>
      )}
    </>
  );
}
