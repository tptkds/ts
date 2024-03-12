'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Search from './Search';
import DarkModeToggleButton from './DarkModeToggleButton';
import { CiLogin, CiMenuBurger } from 'react-icons/ci';
import { PiShoppingBagLight } from 'react-icons/pi';
import { CATEGIRIES } from '@/constants/product';

function Links() {
  const [isLoaded, setIsLoaded] = useState(false);
  const categoryBox = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  if (!isLoaded) return;

  const handleClick = () => {
    categoryBox.current?.classList.contains('hidden')
      ? categoryBox.current?.classList.remove('hidden')
      : categoryBox.current?.classList.add('hidden');
  };
  return (
    <>
      <li className="basis-1/3">
        <ul className="flex">
          <li className="ml-12 xs-max">
            <Link href="/">
              <h1 className="text-sl font-normal">showfinnmore</h1>
            </Link>
          </li>
          <li className="flex ml-4">
            <DarkModeToggleButton />
          </li>
        </ul>
      </li>
      <li className="relative flex items-center  justify-center basis-1/3 sm-max-hidden">
        <ul className="flex items-center justify-between w-full min-w-220">
          {CATEGIRIES.map((v) => (
            <li key={v} className="text-xs">
              <Link href={`/product/${v}/1`}>
                {v.replace(/\b\w/g, (match) => match.toUpperCase())}
              </Link>
            </li>
          ))}
        </ul>
      </li>
      <li className="basis-1/3 sm-max-basis">
        <div className="relative hidden xs-max-show text-xl flex-row-reverse mr-4 items-center ">
          <button onClick={handleClick}>
            <CiMenuBurger />
          </button>
          <div
            className="absolute top-10 flex right-0 hidden shadow-md "
            ref={categoryBox}
          >
            <ul className="flex items-end justify-between flex-col bg-white p-4 dark:bg-zinc-900 dark:text-white">
              {CATEGIRIES.map((v) => (
                <li key={v} className="text-xs p-2">
                  <Link href={`/product/${v}/1`}>
                    {v.replace(/\b\w/g, (match) => match.toUpperCase())}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <li className="mr-4">
            <Link href="/cart">
              <PiShoppingBagLight />
            </Link>
          </li>
          <li className="mr-4">
            <Link href="/">
              <CiLogin />
            </Link>
          </li>
          <li className="mr-4">
            <Search />
          </li>
        </div>
        <ul className="flex justify-end items-center xs-max-hidden">
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
