'use client';
import React, { useEffect, useState } from 'react';
import List from './components/List';
import { setCurrentPage, setCategory } from '@/slices/productSlict';
import Pagenation from './components/Pagenation';
import { useAppSelector } from '@/hooks/useAppSelector';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { AppDispatch } from '@/types/reduxTypes';

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
      <List />
      <Pagenation />
    </>
  );
}
