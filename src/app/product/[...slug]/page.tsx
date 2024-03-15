'use client';
import React, { useEffect, useState } from 'react';
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
  }, []);

  return (
    <>
      <div className="flex flex-col mb-44 px-4 sm:px-12">
        <List />
      </div>
      <div className="my-14">
        <Pagenation />
      </div>
    </>
  );
}
