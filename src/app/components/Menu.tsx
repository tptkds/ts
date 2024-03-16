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
    </>
  );
}
