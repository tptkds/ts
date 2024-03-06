import React from 'react';
import Image from 'next/image';
import { getProducts } from '@/utilities/product';
import { Product } from '@/types/globalTypes';

export default async function ProductList({ url }: { url: string }) {
  const products: Product[] = await getProducts(url);
  return (
    <div className="h-full">
      <ul className="flex flex-wrap h-full">
        {products.map((v, i) => {
          return (
            <li
              key={v.id}
              className="bg-white flex flex-wrap lg:w-1/3 md:w-1/2 sm:w-full h-lvh"
            >
              <div className="relative w-full h-full">
                <Image
                  src={v.image}
                  alt={v.title}
                  sizes="100vw"
                  fill
                  style={{
                    objectFit: 'contain',
                  }}
                />
              </div>
              <div>
                <span></span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
