'use client';
import { auth } from '@/app/firebaseConfigure';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { setUserInfo } from '@/slices/userSlice';
import {
  reauthenticateWithCredential,
  updatePassword,
  updateProfile,
} from 'firebase/auth';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';

export default function MyPage() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [clickedButtonName, setClickedButtonName] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const user = useAppSelector((state) => state.user.userInfo);
  const modalBackground = useRef<HTMLDivElement | null>(null);

  const toggleModal = (e: any = null) => {
    if (e?.target.name === 'nameButton') setClickedButtonName('name');
    else setClickedButtonName('password');

    if (modalBackground.current?.classList.contains('hidden')) {
      modalBackground.current?.classList.remove('hidden');
    } else {
      modalBackground.current?.classList.add('hidden');
      setPassword('');
      setName('');
      setClickedButtonName('');
      setIsUpdating(false);
    }
  };

  const changeSomething = () => {
    if (clickedButtonName === 'name') {
      setIsUpdating(true);
      if (name === '') {
        setError('Please enter a new name');
        setIsUpdating(false);
        return;
      }
      if (name == user?.displayName) {
        setError('Please enter a different name');
        setIsUpdating(false);
        return;
      }
      if (name.length > 6) {
        setError('Please enter a name with Six characters or less.');
        setIsUpdating(false);
        return;
      }
      setError('');
      if (auth.currentUser != null)
        try {
          updateProfile(auth.currentUser, { displayName: name })
            .then(() => {
              dispatch(setUserInfo(auth.currentUser));
              toggleModal();
            })
            .catch((error) => console.log(error));
        } catch (error) {
          console.error(error);
          setIsUpdating(false);
          setName('');
        }
    }
    if (clickedButtonName === 'password') {
      setIsUpdating(true);
      if (password === '') {
        setError('Please enter a new password');
        setIsUpdating(false);
        return;
      }
      if (password.length < 6) {
        setError('Please enter a password with Six characters or more.');
        setIsUpdating(false);
        return;
      }
      setError('');
      if (auth.currentUser != null)
        try {
          //reauthenticateWithCredential(auth.currentUser, a)
          updatePassword(auth.currentUser, password)
            .then(() => {
              toggleModal();
              dispatch(setUserInfo(null));
              alert(
                'Password has been successfully changed. Please log in again'
              );
              auth.signOut();
              router.push('/account/login');
            })
            .catch((error) => {
              console.error(error);
              switch (error) {
              }
            });
        } catch (error) {
          console.error(error);
          setIsUpdating(false);
          setName('');
        }
    }
  };

  return (
    <div className="mt-14 flex flex-col justify-center w-full items-center">
      <h2>My Page</h2>
      <div className="my-14 flex flex-col items-center min-w-64">
        <h3 className=" text-xl">Account Info</h3>

        <div className="mt-8">
          <div className="flex ">
            <p className="w-14">Name. </p>
            <p>{user?.displayName}</p>
          </div>
          <div className="flex ">
            <p className="w-14">Email. </p>
            <p>{user?.email}</p>
          </div>
        </div>
        <div className="flex flex-col items-center mt-6 w-full ">
          <button
            name="nameButton"
            type="button"
            className="h-12 text-sm bg-zinc-900 hover:bg-zinc-700 text-white transition duration-200 ease-in-out w-full"
            onClick={toggleModal}
          >
            Change Name
          </button>
          <button
            name="passwordButton"
            type="button"
            className="h-12 mt-4 text-sm bg-zinc-900 hover:bg-zinc-700 text-white transition duration-200 ease-in-out w-full"
            onClick={toggleModal}
          >
            Change Password
          </button>
        </div>

        <div
          className="bg-black bg-opacity-30 w-full h-full fixed top-0 left-0 hidden"
          ref={modalBackground}
        >
          <div className="absolute z-50 top-10  shadow-md search-modal-center bg-white w-96 h-96  overflow-y-auto">
            <button
              name="downModal"
              className="absolute right-4 top-4 text-xl"
              onClick={toggleModal}
            >
              <IoCloseSharp />
            </button>

            <div className="flex flex-col justify-center items-center h-full w-full">
              <h4 className="mb-8">
                {clickedButtonName === 'name'
                  ? 'Changing Name'
                  : 'Changing Password'}
              </h4>
              <div className="text-red-600 text-sm mb-4">{error}</div>
              <label className="mb-4 w-full">
                {clickedButtonName === 'name' ? 'New Name' : 'New Password'}
                {clickedButtonName === 'name' ? (
                  <input
                    type="text"
                    value={name}
                    placeholder="Six characters or less"
                    onChange={(e) => setName(e.target.value)}
                    className="mt-2 px-4 text-sm h-14 bg-gray-50 border-gray-200 border outline-none w-full"
                  />
                ) : (
                  <input
                    type="password"
                    value={password}
                    placeholder="Six characters or more"
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-2 px-4 text-sm h-14 bg-gray-50 border-gray-200 border outline-none w-full"
                  />
                )}
              </label>
              <button
                type="button"
                className="h-12 mt-4 text-sm bg-zinc-900 hover:bg-zinc-700 text-white transition duration-200 ease-in-out w-full"
                onClick={changeSomething}
                disabled={isUpdating}
              >
                {isUpdating
                  ? 'Updating...'
                  : clickedButtonName === 'name'
                  ? 'Change Name'
                  : 'Change Password'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
