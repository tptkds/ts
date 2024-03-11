'use client';
import React from 'react';
import Link from 'next/link';
import Search from './Search';
import DarkModeToggleButton from './DarkModeToggleButton';

function Links() {
  return (
    <>
      <li className="basis-1/3">
        <ul className="flex">
          <li className="ml-12">
            <Link href="/">
              <h1 className="text-sl font-normal">showfinnmore</h1>
            </Link>
          </li>
          <li className="flex ml-4">
            <DarkModeToggleButton />
          </li>
        </ul>
      </li>
      <li className="relative  flex items-center basis-1/3  justify-center">
        <ul className="flex items-center justify-between w-full">
          <li>
            <Link href="/product/all/1">All</Link>
          </li>
          <li>
            <Link href="/product/women/1">Women</Link>
          </li>
          <li>
            <Link href="/product/men/1">Men</Link>
          </li>
          <li>
            <Link href="/product/jewelery/1">Jewelery</Link>
          </li>
          <li>
            <Link href="/product/electronics/1">Electronics</Link>
          </li>
        </ul>
      </li>
      <li className="basis-1/3">
        <ul className="flex justify-end items-center">
          <li className="mr-4">
            <Search />
          </li>
          <li className="mr-4 text-xs">
            <Link href="/">LOG IN</Link>
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
