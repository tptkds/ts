'use client';
import React, { useRef } from 'react';
import { CiMenuBurger } from 'react-icons/ci';
import DarkModeToggleButton from './DarkModeToggleButton';
import Link from 'next/link';
import { CATEGIRIES } from '@/constants/product';
export default function Menu() {
  const menu = useRef<HTMLUListElement>(null);
  const toggleMenu = () => {
    if (menu.current?.classList.contains('hidden')) {
      menu.current?.classList.remove('hidden');
    } else {
      menu.current?.classList.add('hidden');
    }
  };
  return (
    <>
      <button
        type="button"
        className="flex lg:hidden ml-8 lg:m-0"
        onClick={toggleMenu}
      >
        <CiMenuBurger />
      </button>
      <div className="flex items-center p-2 lg:p-0 lg:basis-1/6 ">
        <DarkModeToggleButton />
      </div>
      <ul
        className="shadow-md absolute bg-white p-4 top-full hidden text-xs lg:basis-5/6 lg:shadow-none lg:bg-transparent lg:static lg:p-0 lg:flex lg:justify-between lg:w-full lg:min-w-220 dark:bg-zinc-900 dark:text-white"
        ref={menu}
      >
        {CATEGIRIES.map((v) => (
          <li key={v} className="p-2 lg:p-0">
            <Link href={`/product/${v}/1`} onClick={toggleMenu}>
              {v.replace(/\b\w/g, (match) => match.toUpperCase())}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
