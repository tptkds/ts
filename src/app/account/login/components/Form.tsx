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
  const [isSignIng, setIsSignIng] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const dispatch: AppDispatch = useAppDispatch();
  const router = useRouter();

  const singIn = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSignIng(true);
    if (email === '' || password === '') {
      setError('이메일과 패스워드 모두 입력해 주세요.');
      setIsSignIng(false);
      return;
    }

    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch(setUserLogIn());
          dispatch(setUserInfo(user));
          router.push('/');
        })
        .catch((error) => {
          setIsSignIng(false);
          const errorCode = error.code;
          console.log(errorCode);
          switch (errorCode) {
            case 'auth/invalid-credential':
              setError('이메일 혹은 패스워드가 일치하지 않아요.');
              return;
            case 'auth/network-request-failed':
              setError(
                '네트워크 연결에 실패했어요. 잠시 후에 다시 시도해 주세요.'
              );
              return;
            case 'auth/invalid-email':
              setError('이메일 형식을 올바르게 입력해 주세요.');
              return;
            case 'auth/internal-error':
              setError('잘못된 요청이에요.');
              return;
            case 'auth/too-many-requests':
              setError('잠시 후 다시 시도해 주세요.');
              return;
            default:
              setError('로그인에 실패했어요.');
              return;
          }
        });
    } catch (error) {
      console.error('로그인 에러:', error);
    }
  };

  return (
    <>
      <div className="text-red-600 text-sm mb-4">{error}</div>{' '}
      <form onSubmit={singIn} className="flex flex-col items-center w-full">
        <div className="flex flex-col items-center w-full">
          <input
            name="email"
            type="email"
            value={email}
            placeholder="Email"
            autoComplete="username"
            onChange={(e) => setEmail(e.target.value)}
            className="px-4  text-sm h-14 bg-gray-50 border-gray-200 border mb-6 outline-none w-11/12 sm:w-4/5 md:w-1/2 lg:w-2/5 xl:w-1/3 "
          />
          <input
            name="password"
            type="password"
            value={password}
            placeholder="Password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 text-sm h-14 bg-gray-50 border-gray-200 border outline-none w-11/12 sm:w-4/5 md:w-1/2 lg:w-2/5 xl:w-1/3 "
          />
        </div>
        <div className="flex flex-col items-center w-full my-8">
          <button
            type="submit"
            disabled={isSignIng}
            className="h-12 text-sm bg-zinc-900 hover:bg-zinc-600 text-white transition duration-200 ease-in-out  w-11/12 sm:w-4/5 md:w-1/2 lg:w-2/5 xl:w-1/3"
          >
            Sign In
          </button>
        </div>
      </form>
    </>
  );
}

export default Form;
