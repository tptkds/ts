'use client';
import React, { useRef } from 'react';

import DarkModeToggleButton from './DarkModeToggleButton';
import Link from 'next/link';
import { CATEGIRIES } from '@/constants/product';

import { GrMenu } from 'react-icons/gr';
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
        style={{ fontSize: '20px' }}
      >
        <GrMenu />
      </button>
      <div className="flex items-center p-2 lg:p-0 lg:basis-1/6 ">
        <DarkModeToggleButton />
      </div>
      <ul
        className="shadow-md absolute bg-white p-4 top-full hidden lg:basis-5/6 lg:shadow-none lg:bg-transparent lg:static lg:p-0 lg:flex lg:justify-between lg:w-full lg:min-w-220 "
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
