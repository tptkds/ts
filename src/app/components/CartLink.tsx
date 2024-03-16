import Link from 'next/link';
import React from 'react';
import { IoBagSharp } from 'react-icons/io5';

export default function CartLink() {
  return (
    <Link href="/cart" className="flex items-center">
      <IoBagSharp className="mr-2" style={{ fontSize: '20px' }} />
      <p className="">Cart</p>
    </Link>
  );
}
