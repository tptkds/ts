import { useAppSelector } from '@/hooks/useAppSelector';
import Link from 'next/link';
import React, { useRef } from 'react';
import { CiLogin, CiLogout } from 'react-icons/ci';
import { PiUserCircleLight } from 'react-icons/pi';
import { auth } from '../firebaseConfigure';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { setUserInfo } from '@/slices/userSlice';

export default function User() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.userInfo);
  const userMenu = useRef<HTMLDivElement>(null);
  const toggleUserMenu = () => {
    if (userMenu.current?.classList.contains('hidden')) {
      userMenu.current?.classList.remove('hidden');
    } else {
      userMenu.current?.classList.add('hidden');
    }
  };

  const logout = () => {
    auth.signOut();
    dispatch(setUserInfo(null));
  };
  return (
    <>
      {user ? (
        <>
          <button
            type="button"
            onClick={toggleUserMenu}
            className=" flex items-center"
          >
            <PiUserCircleLight className="text-xl" />
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
              Log Out
            </button>
          </div>
        </>
      ) : (
        <Link href="/account/login">
          <CiLogin className="text-lg md:hidden" />
          <p className="hidden md:block">Login</p>
        </Link>
      )}
    </>
  );
}
