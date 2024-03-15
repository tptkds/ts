'use client';
import React, { useMemo } from 'react';
import Image from 'next/image';
import { CartItems, Product, Wishlist } from '@/types/globalTypes';
import { useAppSelector } from '@/hooks/useAppSelector';
import {
  CATEGIRIES,
  CATEGIRIES_MATCH,
  ITEMSPERPAGE,
} from '@/constants/product';
import CartButton from './CartButton';
import { useRouter } from 'next/navigation';
import WishlistButton from './WishlistButton';

export default function List() {
  const router = useRouter();
  const curCategory: string = useAppSelector((state) => state.product.category);
  const cartItems: CartItems = useAppSelector(
    (state) => state.product.cartItems
  );
  const wishlist: Wishlist = useAppSelector((state) => state.product.wishlist);

  const productList: Product[] = useAppSelector(
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

  const startIndex: number = ITEMSPERPAGE * (currentPage - 1);
  const endIndex: number = startIndex + 9;
  const curProducts: Product[] = curProductList.slice(startIndex, endIndex);

  const handleClick = (id: number) => {
    router.push(`/product/detail/${id}`);
  };
  /**/
  return (
    <>
      <ul className="grid grid-cols-1 gap-8 h-full sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {curProducts.map((product, i) => {
          return (
            <li key={product.id} className="h-full">
              <div className="flex items-center w-full h-full ">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto', padding: '20%' }}
                />
              </div>

              <div>
                <p>{product.title}</p>
                <p>${product.price}</p>
              </div>
              <div className="flex">
                <div className="mr-2">
                  <WishlistButton item={product} wishlist={wishlist} />
                </div>
                <div>
                  <CartButton item={product} cartItems={cartItems} />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
