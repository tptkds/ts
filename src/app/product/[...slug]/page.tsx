'use client';
import React, { useEffect } from 'react';
import { setCurrentPage, setCategory } from '@/slices/productSlict';
import { useAppSelector } from '@/hooks/useAppSelector';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { AppDispatch } from '@/types/reduxTypes';
import List from './components/List';
import Pagenation from './components/Pagenation';

export default function Product({ params }: { params: { slug: string } }) {
  const dispatch: AppDispatch = useAppDispatch();
  const prevCategory: string = useAppSelector(
    (state) => state.product.category
  );
  const curCategory: string = params.slug[0];
  const curPage: number = Number(params.slug[1]);

  useEffect(() => {
    if (prevCategory !== curCategory) dispatch(setCategory(curCategory));
    dispatch(setCurrentPage(curPage));
  }, [curCategory]);

  return (
    <>
      <div className="mt-14 flex flex-col justify-center w-full items-center">
        <h2>{curCategory.charAt(0).toUpperCase() + curCategory.slice(1)}</h2>
      </div>

      <div className="flex flex-col mb-44">
        <List />
      </div>
      <div className="my-14">
        <Pagenation />
      </div>
    </>
  );
}
