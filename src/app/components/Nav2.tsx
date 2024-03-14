'use client';
import Link from 'next/link';
import React, { useRef } from 'react';
import DarkModeToggleButton from './DarkModeToggleButton';
import { CATEGIRIES } from '@/constants/product';
import Search from './Search';
import { CiLogin, CiMenuBurger } from 'react-icons/ci';
import { PiHeartLight, PiShoppingBagLight } from 'react-icons/pi';
import Image from 'next/image';

export default function Nav2() {
  const menu = useRef<HTMLUListElement>(null);
  const toggleMenu = () => {
    if (menu.current?.classList.contains('hidden')) {
      menu.current?.classList.remove('hidden');
    } else {
      menu.current?.classList.add('hidden');
    }
  };
  return (
    <nav className="flex relative min-width-313 items-center m-4 header-bottom sticky h-16 shadow-md rounded-xl bg-white bg-opacity-80 dark:bg-black dark:bg-opacity-60 dark:text-white">
      <div className="flex basis-1/3 order-1 justify-center  md:justify-normal md:order-0 md:ml-8 md:order-0">
        <h1 className="md:mr-2 text-xs font-normal flex items-center ">
          <Link href="/">showfinnmore</Link>
        </h1>
      </div>
      <div className="flex basis-1/3 items-center order-0  md:order-1 md:justify-evenly">
        <button
          type="button"
          className="flex md:hidden ml-8 md:m-0"
          onClick={toggleMenu}
        >
          <CiMenuBurger />
        </button>
        <div className="flex items-center p-2 md:p-0 md:basis-1/12 ">
          <DarkModeToggleButton />
        </div>
        <ul
          className="shadow-md absolute bg-white p-4 top-full hidden text-xs md:basis-11/12 md:shadow-none md:bg-transparent md:static md:p-0 md:flex md:justify-between md:w-full md:min-w-220 dark:bg-zinc-900 dark:text-white"
          ref={menu}
        >
          {CATEGIRIES.map((v) => (
            <li key={v} className="p-2 md:p-0">
              <Link href={`/product/${v}/1`} onClick={toggleMenu}>
                {v.replace(/\b\w/g, (match) => match.toUpperCase())}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex basis-1/3 justify-end text-xs items-center order-2">
        <div className="mr-2 md:mr-4">
          <Search />
        </div>
        <div className="mr-2 md:mr-4">
          <Link href="/wishlist">
            <PiHeartLight className="text-lg md:hidden" />
            <p className="hidden md:block">WishList</p>
          </Link>
        </div>
        <div className="mr-2 md:mr-4">
          <Link href="/account/login">
            <CiLogin className="text-lg md:hidden" />
            <p className="hidden md:block">Login</p>
          </Link>
        </div>
        <div className="mr-8">
          <Link href="/cart">
            <PiShoppingBagLight className="text-lg md:hidden " />
            <p className="hidden md:block">Cart</p>
          </Link>
        </div>
      </div>
    </nav>
  );
}
