'use client';
import React, { useState } from 'react';
import { auth } from '@/app/firebaseConfigure';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { AppDispatch } from '@/types/reduxTypes';
import { setUserInfo, setUserLogIn } from '@/slices/userSlice';
import { useRouter } from 'next/navigation';

function Form() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch: AppDispatch = useAppDispatch();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          const user = userCredential.user;
          dispatch(setUserLogIn());
          dispatch(setUserInfo(user));
          router.push('/');
        }
      );
    } catch (error) {
      console.error('로그인 에러:', error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center w-full mb-4"
    >
      <div className="flex flex-col items-center w-full mb-4">
        <input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="px-4 w-1/3 h-16 bg-gray-50 border-gray-200 border mb-4"
        />
        <input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="px-4 w-1/3 h-16 bg-gray-50 border-gray-200 border mb-4"
        />
      </div>
      <div className="flex flex-col items-center w-full">
        <button type="submit">Sign In</button>
      </div>
    </form>
  );
}

export default Form;
