'use client';
import Link from 'next/link';
import React, { useContext, useRef } from 'react';
import { CiLogin } from 'react-icons/ci';
import { PiUserCircleLight } from 'react-icons/pi';
import { auth } from '../firebaseConfigure';
import { AuthContext } from '../AuthProvider';
import { useRouter } from 'next/navigation';
import { FiLogIn } from 'react-icons/fi';
import { BiSolidLogIn } from 'react-icons/bi';
import { FaCircleUser } from 'react-icons/fa6';

export default function User() {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const router = useRouter();
  const userMenu = useRef<HTMLDivElement>(null);
  const toggleUserMenu = () => {
    if (userMenu.current?.classList.contains('hidden')) {
      userMenu.current?.classList.remove('hidden');
    } else {
      userMenu.current?.classList.add('hidden');
    }
  };

  const logout = () => {
    setCurrentUser(null);
    auth.signOut();
    router.push('/');
  };
  return (
    <>
      {currentUser ? (
        <>
          <button
            type="button"
            onClick={toggleUserMenu}
            className=" flex items-center"
          >
            <FaCircleUser className="mr-2" style={{ fontSize: '22px' }} />
            <p>{currentUser.displayName}</p>
          </button>
          <div
            className="shadow-md  absolute bg-white top-full hidden text-xs dark:bg-zinc-900 dark:text-white"
            ref={userMenu}
          >
            <Link
              href="/account/mypage"
              className=" flex w-full text-center p-4"
              onClick={() => userMenu.current?.classList.add('hidden')}
            >
              My Page
            </Link>

            <button
              type="button"
              className="flex w-full text-center p-4"
              onClick={logout}
            >
              Logout
            </button>
          </div>
        </>
      ) : (
        <Link href="/account/login" className="flex items-center">
          <BiSolidLogIn className="mr-2" style={{ fontSize: '20px' }} />
          <p className="">LOGIN</p>
        </Link>
      )}
    </>
  );
}
