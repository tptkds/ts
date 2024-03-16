import Link from 'next/link';
import React from 'react';
import { PiHeartLight } from 'react-icons/pi';

export default function WishlistLink() {
  return (
    <Link href="/wishlist">
      <PiHeartLight className="text-lg md:hidden" />
      <p className="hidden md:block">Wish List</p>
    </Link>
  );
}
