'use client';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import DarkModeToggleButton from './DarkModeToggleButton';
import { CATEGIRIES } from '@/constants/product';
import Search from './Search';
import { CiLogin, CiMenuBurger } from 'react-icons/ci';
import { PiHeartLight, PiShoppingBagLight } from 'react-icons/pi';

export default function Nav2() {
  //   const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
  const menu = useRef<HTMLUListElement>(null);
  const toggleMenu = () => {
    if (menu.current?.classList.contains('hidden')) {
      menu.current?.classList.remove('hidden');
    } else {
      menu.current?.classList.add('hidden');
    }
  };
  return (
    <nav className="flex relative items-center m-4 header-bottom sticky h-16 shadow-md rounded-xl bg-white bg-opacity-80 dark:bg-black dark:bg-opacity-60 dark:text-white">
      <div className="flex basis-1/3 order-1 justify-center  md:order-0 md:ml-8 md:order-0">
        <h1 className="md:mr-2 text-sm font-normal ">
          <Link href="/">showfinnmore</Link>
        </h1>
        <div className="flex items-center ">
          <DarkModeToggleButton />
        </div>
      </div>
      <div className="flex basis-1/3 items-center order-0 ml-8 md:order-1">
        <button type="button" className="flex md:hidden" onClick={toggleMenu}>
          <CiMenuBurger />
        </button>
        <ul
          className="shadow-md absolute bg-white p-4 top-full hidden text-xs md:shadow-none md:bg-transparent md:static md:p-0 md:flex md:justify-between md:w-full md:min-w-220 dark:bg-zinc-900 dark:text-white"
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
            <p className="hidden md:block">WISHLIST</p>
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
            <p className="hidden md:block">CART</p>
          </Link>
        </div>
      </div>
    </nav>
  );
}
