import Link from 'next/link';
import React from 'react';
import { PiShoppingBagLight } from 'react-icons/pi';

export default function CartLink() {
  return (
    <Link href="/cart">
      <PiShoppingBagLight className="text-lg md:hidden " />
      <p className="hidden md:block">Cart</p>
    </Link>
  );
}
