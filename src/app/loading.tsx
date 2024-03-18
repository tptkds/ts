import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Loading() {
  const productSkeleton = <></>;
  return (
    <div className="h-svh pt-24 ">
      <Skeleton height={30} width={`60%`} /> {/* 예시로 제목용 스켈레톤 */}
      <Skeleton count={5} height={10} width={`80%`} />{' '}
    </div>
  );
}
