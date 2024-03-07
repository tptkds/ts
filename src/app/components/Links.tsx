'use client';
import React from 'react';
import Link from 'next/link';

function Links() {
  return (
    <>
      <li>
        <Link href="/product/all">SHOP</Link>
        <ul className="hidden absolute items-center">
          <li>
            <Link href="/product/all">All</Link>
          </li>
          <li>
            <Link href="/">Electronics</Link>
          </li>
          <li>
            <Link href="/">Jewelery</Link>
          </li>
          <li>
            <Link href="/">Men&apos;s clothing</Link>
          </li>
          <li>
            <Link href="/">Women&apos;s clothing</Link>
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
