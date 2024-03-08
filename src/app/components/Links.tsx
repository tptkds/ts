'use client';
import React, { useRef } from 'react';
import Link from 'next/link';

function Links() {
  const shopElementRef: HTMLElement | null = useRef(null);
  const mouseOverHandler = () => {
    shopElementRef.className.remove(hidden);
  };
  return (
    <>
      <li className="relative" onMouseOver={mouseOverHandler}>
        <Link href="/product/all">SHOP</Link>
        <ul className=" absolute items-center z-50 top-12" ref={shopElementRef}>
          <li className="py-2">
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
      <li>
        <button>SEARCH</button>
      </li>
      <li>
        <Link href="/">LOGIN</Link>
      </li>
      <li>
        <Link href="/cart">CART</Link>
      </li>
    </>
  );
}

export default Links;
