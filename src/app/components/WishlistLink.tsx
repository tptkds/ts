import Link from 'next/link';
import React from 'react';
import { FiHeart } from 'react-icons/fi';
import { PiHeartStraightFill } from 'react-icons/pi';

export default function WishlistLink() {
  return (
    <Link href="/wishlist" className="flex items-center">
      <PiHeartStraightFill className=" mr-2" style={{ fontSize: '20px' }} />
      <p className="">Wish List</p>
    </Link>
  );
}
