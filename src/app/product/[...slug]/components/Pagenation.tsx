'use client';

import {
  CATEGIRIES,
  CATEGIRIES_MATCH,
  ITEMSPERPAGE,
} from '@/constants/product';
import { useAppSelector } from '@/hooks/useAppSelector';
import { Product } from '@/types/globalTypes';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';

export default function Pagenation() {
  const curCategory = useAppSelector((state) => state.product.category);
  let productList: Product[] = useAppSelector(
    (state) => state.product.productList
  );

  const currentPage: number = useAppSelector(
    (state) => state.product.currentPage
  );
  const curProductList: Product[] = useMemo(() => {
    if (productList.length === 0) {
      return [];
    }
    if (curCategory === 'all') {
      return productList;
    } else {
      const cartegoryIndex: number = CATEGIRIES.findIndex(
        (v) => v === curCategory
      );
      const filteredData: Product[] = productList.filter((item) => {
        return item.category === CATEGIRIES_MATCH[cartegoryIndex];
      });
      return filteredData;
    }
  }, [productList, curCategory]);

  const totalItems: number = curProductList.length;
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
    <ul className="flex justify-center items-center	mb-8">
      <li className="p-2.5">
        <button name="newer" onClick={handleClick} disabled={currentPage === 1}>
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
  );
}
