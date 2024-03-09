'use client';

import { ITEMSPERPAGE } from '@/constants/product';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { setCurrentPage } from '@/slices/productSlict';
import { Product } from '@/types/globalTypes';
import next from 'next';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Pagenation() {
  const dispatch = useAppDispatch();
  const curCategory: string = useAppSelector((state) => state.product.category);
  const currentPage = useAppSelector((state) => state.product.currentPage);
  const productList: Product[] = useAppSelector(
    (state) => state.product.productList
  );

  const totalItems: number = productList.length;
  const totalPages: number = Math.ceil(totalItems / ITEMSPERPAGE);

  const router = useRouter();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const name: string = target.name;

    let nextPage: string | number = '';
    if (name === 'newer') {
      nextPage = Number(currentPage) - 1;
    } else if (name === 'older') {
      nextPage = Number(currentPage) + 1;
    } else {
      nextPage = Number(name);
    }

    router.push(`/product/${curCategory}/${nextPage}`);
  };

  return (
    <div>
      <ul className="flex justify-center items-center	">
        <li className="p-2.5">
          <button
            name="newer"
            onClick={handleClick}
            disabled={currentPage === 1}
          >
            NEWER
          </button>
        </li>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <li key={page} className="p-2.5">
              <button
                name={page.toString()}
                onClick={handleClick}
                disabled={page === currentPage}
              >
                {page}
              </button>
            </li>
          )
        )}
        <li className="p-2.5">
          <button
            name="older"
            onClick={handleClick}
            disabled={currentPage === totalPages}
          >
            OLDER
          </button>
        </li>
      </ul>
    </div>
  );
}
