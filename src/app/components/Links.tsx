'use client';
import React, { useRef } from 'react';
import Link from 'next/link';
import { CiLogin, CiShoppingCart } from 'react-icons/ci';
import Search from './Search';

function Links() {
  const shopElementRef = useRef<HTMLUListElement | null>(null);
  const mouseOverHandler = () => {
    shopElementRef.current?.classList.remove('hidden');
  };
  const mouseOutHandler = () => {
    shopElementRef.current?.classList.add('hidden');
  };

  return (
    <>
      <li className="basis-1/4 flex justify-center">
        <Link href="/">HOME</Link>
      </li>
      <li
        className="relative h-full flex items-center basis-1/4  justify-center"
        onMouseOver={mouseOverHandler}
        onMouseOut={mouseOutHandler}
      >
        <Link href="/product/all/1">SHOP</Link>
        <ul
          className=" absolute items-center z-50 top-16 hidden"
          ref={shopElementRef}
        >
          <li className="py-2 pt-4">
            <Link href="/product/all/1">All</Link>
          </li>
          <li className="py-1">
            <Link href="/product/women/1">Women</Link>
          </li>
          <li className="py-1">
            <Link href="/product/men/1">Men</Link>
          </li>
          <li className="py-1">
            <Link href="/product/jewelery/1">Jewelery</Link>
          </li>
          <li className="py-1">
            <Link href="/product/electronics/1">Electronics</Link>
          </li>
        </ul>
      </li>
      <li className="basis-1/4">
        <ul className="flex justify-end items-center">
          <li className="mr-4">
            <Search />
          </li>
          <li className="mr-4 text-xs">
            <Link href="/">LOGIN</Link>
          </li>
          <li className="mr-12 text-xs">
            <Link href="/cart">CART</Link>
          </li>
        </ul>
      </li>
    </>
  );
}

export default Links;
