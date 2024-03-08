'use client';
import { CartItems } from '@/types/globalTypes';
import {
  deleteCartItemsLS,
  getCartItemsLS,
  setCartItemsLS,
} from '@/utilities/localstorage';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface CheckBoxes {
  [key: string]: boolean;
}

function CartForm() {
  const [cartItems, setCartItems] = useState<CartItems>({});
  const [checkBoxes, setCheckBoxes] = useState<CheckBoxes>({});
  const [checkAllBox, setCheckAllBox] = useState<boolean>(false);
  let keys: string[] = cartItems && Object.keys(cartItems);

  useEffect(() => {
    const cartItems = getCartItemsLS();
    setCartItems(cartItems);

    let checkBoxesData: { [key: string]: boolean } = {};
    Object.keys(cartItems).forEach((key) => {
      checkBoxesData[key] = false;
    });
    setCheckBoxes(checkBoxesData);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;

    if (target.name === 'all') {
      const newCheckAllBox = !checkAllBox;
      const newCheckBoxes: CheckBoxes = {};

      keys.forEach((key) => (newCheckBoxes[key] = newCheckAllBox));
      setCheckBoxes(newCheckBoxes);
      setCheckAllBox(newCheckAllBox);
    } else {
      console.log(target, target.name, checkBoxes[target.name]);

      setCheckBoxes((prevCheckBoxes) => ({
        ...prevCheckBoxes,
        [target.name]: !prevCheckBoxes[target.name],
      }));
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = e.target as HTMLButtonElement;
    if (target?.name === 'deleteMany') {
      const keys: string[] = Object.keys(checkBoxes).filter(
        (key) => checkBoxes[key]
      );
      deleteCartItemsLS(keys);
    } else {
      deleteCartItemsLS([target.id]);
    }
    setCartItems(getCartItemsLS());
  };

  return (
    <div>
      <form action="">
        <ul>
          <li className="my-4 flex">
            <input
              type="checkbox"
              className="mr-4"
              onChange={handleChange}
              name="all"
              checked={checkAllBox}
            />
            <div className="lg:w-1/12 md:w-2/6 sm:w-2/12  w-3/12 py-8 mx-4 flex items-center">
              <p className="whitespace-pre-line=true">PRODUCT</p>
            </div>
            <div className="w-full flex items-center">
              <p className="w-2/5 mr-8"></p>
              <p className="grow w-1/5 whitespace-pre-line=true flex justify-end">
                PRICE
              </p>
              <p className="grow w-1/5 whitespace-pre-line=true flex justify-end">
                QUANTITY
              </p>
              <p className="grow w-1/5 whitespace-pre-line=true flex justify-end">
                TOTAL
              </p>
              <p className="mr-8 w-12"></p>
            </div>
          </li>
          {keys.length !== 0
            ? keys.map((v) => {
                return (
                  <li key={v} className="my-4 flex items-center">
                    <input
                      name={v}
                      type="checkbox"
                      className="mr-4"
                      onChange={handleChange}
                      checked={checkBoxes[v]}
                    />
                    <div className="relative lg:w-1/12 md:w-2/6 sm:w-2/12  h-24 w-3/12 mx-4">
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
                    <div className="w-full flex ">
                      <div className=" w-2/5 whitespace-pre-line=true flex items-center mr-8">
                        <p>{cartItems[v].title}</p>
                      </div>
                      <div className="grow w-1/5 whitespace-pre-line=true  flex justify-end flex items-center">
                        <p>{cartItems[v].price}</p>
                      </div>
                      <div className="grow w-1/5 whitespace-pre-line=true  flex justify-end flex items-center">
                        <p>{'개수'}</p>
                      </div>
                      <div className="grow w-1/5 whitespace-pre-line=true  flex justify-end flex items-center">
                        <p>{'총합'}</p>
                      </div>
                    </div>
                    <div className="flex ml-8 w-12">
                      <button id={v} onClick={handleClick}>
                        delete
                      </button>
                    </div>
                  </li>
                );
              })
            : 'EMPTY'}
          <li>
            <button name="deleteMany" onClick={handleClick}>
              delete
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default CartForm;
