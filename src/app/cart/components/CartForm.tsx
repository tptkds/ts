'use client';
import { CartItems } from '@/types/globalTypes';
import { getCartItemsLS } from '@/utilities/localstorage';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

function CartForm() {
  const [cartItems, setCartItems] = useState<CartItems | null | undefined>(
    null
  );
  let keys: string[] | null | undefined = cartItems && Object.keys(cartItems);

  useEffect(() => {
    const cartItems = getCartItemsLS();
    setCartItems(cartItems);
  }, []);

  return (
    <div>
      <form action="">
        <ul>
          <li className="my-8 flex">
            <p>PRODUCT</p>
            <div className="flex">
              <p></p>
              <p>PRICE</p>
              <p>QUANTITY</p>
              <p>TOTAL</p>
            </div>
          </li>
          {keys
            ? keys.map((v) => {
                return (
                  <li key={v} className="my-8 flex">
                    <div className="relative lg:w-1/6 md:w-2/6 sm:w-2/6  h-24 m-6">
                      <Image
                        src={cartItems[v].image}
                        alt={cartItems[v].title}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        fill
                        style={{
                          objectFit: 'contain',
                        }}
                      />
                    </div>
                    <div className="flex w-full">
                      <div className="grow">
                        <p>{cartItems[v].title}</p>
                      </div>
                      <div className="grow">
                        <p>{cartItems[v].price}</p>
                      </div>
                      <div className="grow">
                        <p>{'개수'}</p>
                      </div>
                      <div className="grow">
                        <p>{'총합'}</p>
                      </div>
                    </div>
                  </li>
                );
              })
            : 'EMPTY'}
        </ul>
      </form>
    </div>
  );
}

export default CartForm;
