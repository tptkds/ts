'use client';
import Link from 'next/link';
import React, { useContext } from 'react';
import { auth } from '../firebaseConfigure';
import { AuthContext } from '../AuthProvider';
import { useRouter } from 'next/navigation';
import { RiLoginBoxFill, RiLogoutBoxFill } from 'react-icons/ri';
import { getCartItemsLocalStorage } from '@/utilities/localstorage';
import { CartItems } from '@/types/globalTypes';
import { setCartItems } from '@/slices/productSlict';
import { useAppDispatch } from '@/hooks/useAppDispatch';

export default function User() {
  const dispatch = useAppDispatch();
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const router = useRouter();

  const logout = () => {
    setCurrentUser(null);
    auth.signOut();

    const cartItems: CartItems = getCartItemsLocalStorage();
    dispatch(setCartItems(cartItems));

    router.push('/');
  };
  return (
    <>
      {currentUser ? (
        <button onClick={logout} className="flex items-center">
          <RiLogoutBoxFill className="xl:mr-2" style={{ fontSize: '20px' }} />
          <p className="hidden xl:block">Logout</p>
        </button>
      ) : (
        <Link href="/account/login" className="flex items-center">
          <RiLoginBoxFill className="xl:mr-2" style={{ fontSize: '20px' }} />
          <p className="hidden xl:block">Login</p>
        </Link>
      )}
    </>
  );
}
