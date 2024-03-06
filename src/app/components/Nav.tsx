'use client';
import Link from 'next/link';

export default function Nav() {
  return (
    <div className="flex m-4 header-bottom sticky h-16	shadow-md rounded-xl bg-opacity-50 bg-white">
      <nav className="w-full">
        <ul className="flex flex-row justify-around items-center h-full text-gray-700 font-semibold text-sm">
          <li className="">showfinnmore</li>
          <li>DARKMODE</li>
          <li>HOME</li>
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
        </ul>
      </nav>
    </div>
  );
}
