import React from 'react';
import Image from 'next/image';
import { Product } from '@/types/globalTypes';
import { useAppSelector } from '@/hooks/useAppSelector';

export default function List() {
  const products: Product[] = useAppSelector((state) => state.product.products);
  return (
    <div className="h-full">
      <ul className="flex flex-wrap h-full">
        {products.map((v, i) => {
          return (
            <li
              key={v.id}
              className="flex-col bg-white flex flex-wrap lg:w-1/3 md:w-1/2 sm:w-full h-lvh"
            >
              <div className=" w-full h-5/6 justify-center flex">
                <div className=" relative w-3/6 h-full ">
                  <Image
                    src={v.image}
                    alt={v.title}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    fill
                    style={{
                      objectFit: 'contain',
                    }}
                  />
                </div>
              </div>
              <div className="px-8">
                <p>{v.title.toUpperCase()}</p>
                <p>${v.price.toLocaleString()}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
