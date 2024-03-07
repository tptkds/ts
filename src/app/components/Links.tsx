'use client';
import React from 'react';
import Link from 'next/link';

function Links() {
  return (
    <>
      <li>
        SHOP
        <ul className="hidden absolute items-center">
          <li>
            <Link href="/">All</Link>
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
        <Link href="/">CART</Link>
      </li>
    </>
  );
}

export default Links;
