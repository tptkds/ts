'use client';
import { useAppSelector } from '@/hooks/useAppSelector';
import { setCartItems } from '@/slices/productSlict';
import { CartItems } from '@/types/globalTypes';
import {
  deleteCartItemsLocalStorage,
  getCartItemsLocalStorage,
} from '@/utilities/localstorage';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

interface CheckBoxes {
  [key: string]: boolean;
}

function CartForm() {
  const dispatch = useDispatch();
  const [checkBoxes, setCheckBoxes] = useState<CheckBoxes>({});
  const [checkAllBox, setCheckAllBox] = useState<boolean>(false);
  const cartItems: CartItems = useAppSelector(
    (state) => state.product.cartItems
  );

  let cartItemKeys: string[] = cartItems && Object.keys(cartItems);

  useEffect(() => {
    let checkBoxesData: { [key: string]: boolean } = {};
    Object.keys(cartItems).forEach((key) => {
      checkBoxesData[key] = false;
    });
    setCheckBoxes(checkBoxesData);
  }, [cartItems]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;

    if (target.name === 'all') {
      const newCheckAllBox = !checkAllBox;
      const newCheckBoxes: CheckBoxes = {};

      cartItemKeys.forEach((key) => (newCheckBoxes[key] = newCheckAllBox));
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
      deleteCartItemsLocalStorage(keys);
    } else {
      deleteCartItemsLocalStorage([target.id]);
    }
    dispatch(setCartItems(getCartItemsLocalStorage()));
  };
  if (!cartItems) return;
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
          {cartItemKeys.length !== 0
            ? cartItemKeys.map((v) => {
                return (
                  <li key={v} className="my-4 flex items-center">
                    <input
                      name={v}
                      type="checkbox"
                      className="mr-4"
                      onChange={handleChange}
                      checked={checkBoxes[v] || false}
                    />
                    <div className="relative lg:w-1/12 md:w-2/6 sm:w-2/12  h-24 w-3/12 mx-4">
                      <Image
                        src={cartItems[v].product.image}
                        alt={cartItems[v].product.title}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        fill
                        style={{
                          objectFit: 'contain',
                        }}
                      />
                    </div>
                    <div className="w-full flex ">
                      <div className=" w-2/5 whitespace-pre-line=true flex items-center mr-8">
                        <p>{cartItems[v].product.title}</p>
                      </div>
                      <div className="grow w-1/5 whitespace-pre-line=true  flex justify-end flex items-center">
                        <p>{cartItems[v].product.price}</p>
                      </div>
                      <div className="grow w-1/5 whitespace-pre-line=true  flex justify-end flex items-center">
                        <p>{cartItems[v].count}</p>
                      </div>
                      <div className="grow w-1/5 whitespace-pre-line=true  flex justify-end flex items-center">
                        <p>{cartItems[v].product.price * cartItems[v].count}</p>
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
