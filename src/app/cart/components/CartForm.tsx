'use client';
import { useAppSelector } from '@/hooks/useAppSelector';
import { setCartItems } from '@/slices/productSlict';
import { CartItems } from '@/types/globalTypes';
import {
  deleteCartItemsLocalStorage,
  getCartItemsLocalStorage,
  setCartItemsLocalStorage,
} from '@/utilities/localstorage';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Insvg } from '../Insvg';
interface CheckBoxes {
  [key: string]: boolean;
}

function CartForm() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
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
      setCheckBoxes((prevCheckBoxes) => ({
        ...prevCheckBoxes,
        [target.name]: !prevCheckBoxes[target.name],
      }));
    }
  };

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    key: string | null = null
  ) => {
    e.preventDefault();
    const target = e.target as HTMLButtonElement;
    if (target?.name === 'deleteMany') {
      const keys: string[] = Object.keys(checkBoxes).filter(
        (key) => checkBoxes[key]
      );
      deleteCartItemsLocalStorage(keys);
    } else if (target?.name === 'deleteOne') {
      deleteCartItemsLocalStorage([target.id]);
    } else if (target?.name === 'increment' && key) {
      const newItem = {
        [key]: {
          product: cartItems[key].product,
          count: cartItems[key].count + 1,
        },
      };
      const newCartItems = { ...cartItems, ...newItem };
      console.log(cartItems, newCartItems);
      setCartItemsLocalStorage(newCartItems);
    } else if (target?.name === 'decrement' && key) {
      if (cartItems[key].count - 1 < 1) return;
      const newItem = {
        [key]: {
          product: cartItems[key].product,
          count: cartItems[key].count - 1,
        },
      };
      const newCartItems = { ...cartItems, ...newItem };
      console.log(cartItems, newCartItems);
      setCartItemsLocalStorage(newCartItems);
    } else {
      return;
    }
    dispatch(setCartItems(getCartItemsLocalStorage()));
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  if (!isLoaded) return;

  return (
    <>
      <div className="mt-14 flex flex-col justify-center w-full items-center">
        <h2>Cart</h2>
      </div>
      <div>
        <form action="">
          <ul>
            <li className="my-4 flex text-sm sm-max-textsize-12">
              <input
                type="checkbox"
                className="mr-4"
                onChange={handleChange}
                name="all"
                checked={checkAllBox}
              />
              <div className="w-2/12 py-8 mx-4 flex items-center">
                <p className="whitespace-pre-line=true">Product</p>
              </div>
              <div className="w-full flex items-center">
                <p className="w-1/5 whitespace-pre-line=true flex items-center md:w-1/4"></p>
                <p className=" w-1/5 whitespace-pre-line=true  flex justify-end  items-center md:w-1/4">
                  Price
                </p>
                <p className=" w-1/5 whitespace-pre-line=true  flex justify-end  items-center md:w-1/4">
                  Amount
                </p>
                <p className=" w-1/5 whitespace-pre-line=true  flex justify-end  items-center md:w-1/4">
                  Total
                </p>
                <p className=" w-1/5 whitespace-pre-line=true  flex justify-end  items-center md:w-1/4"></p>
              </div>
            </li>
            {cartItemKeys.length !== 0 ? (
              cartItemKeys.map((v) => {
                return (
                  <li key={v} className="my-4 flex items-center">
                    <input
                      name={v}
                      type="checkbox"
                      className="mr-4"
                      onChange={handleChange}
                      checked={checkBoxes[v] || false}
                    />
                    <div className="relative h-24 w-2/12 mx-4 bg-white">
                      <Link href={`/product/detail/${cartItems[v].product.id}`}>
                        <Image
                          src={cartItems[v].product.image}
                          alt={cartItems[v].product.title}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          fill
                          style={{
                            objectFit: 'contain',
                          }}
                        />
                      </Link>
                    </div>
                    <div className="w-full flex text-sm sm-max-textsize-12">
                      <div className="w-1/5 whitespace-pre-line=true flex items-center md:w-1/4">
                        <Link
                          href={`/product/detail/${cartItems[v].product.id}`}
                        >
                          {cartItems[v].product.title}
                        </Link>
                      </div>
                      <div className=" w-1/5 whitespace-pre-line=true  flex justify-end  items-center md:w-1/4">
                        <p>{cartItems[v].product.price}</p>
                      </div>
                      <div className=" w-1/5 whitespace-pre-line=true  flex justify-end  items-center md:w-1/4">
                        <button
                          type="button"
                          name="decrement"
                          onClick={(e) => handleClick(e, v)}
                          className="p-2 "
                        >
                          -
                        </button>
                        <input
                          className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0 dark:text-white"
                          type="text"
                          value={cartItems[v].count}
                          data-hs-input-number-input
                          readOnly
                        />
                        <button
                          type="button"
                          name="increment"
                          className="p-2"
                          onClick={(e) => handleClick(e, v)}
                        >
                          +
                        </button>
                      </div>
                      <div className=" w-1/5 whitespace-pre-line=true  flex justify-end  items-center md:w-1/4">
                        <p>
                          {(
                            cartItems[v].product.price * cartItems[v].count
                          ).toFixed(2)}
                        </p>
                      </div>
                      <div className=" w-1/5 whitespace-pre-line=true  flex justify-end  items-center md:w-1/4">
                        <button id={v} name="deleteOne" onClick={handleClick}>
                          delete
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })
            ) : (
              <p className="text-center text-xs p-14 ">
                There are no items in your cart
              </p>
            )}
            <li>
              <button name="deleteMany" onClick={handleClick}>
                delete
              </button>
            </li>
          </ul>
        </form>
      </div>
    </>
  );
}

export default CartForm;
