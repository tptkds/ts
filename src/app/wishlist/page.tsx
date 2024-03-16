'use client';
import React, { useEffect } from 'react';
import List from './components/List';
import { useRouter } from 'next/navigation';
import { auth } from '../firebaseConfigure';
import { Unsubscribe, onAuthStateChanged } from 'firebase/auth';

export default function WishlistComponent() {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe: Unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        alert('Login required service.');
        router.push('/');
      }
    });

    return () => {
      unsubscribe();
    };
  }, [router]);

  return (
    <div>
      <div className="mt-14 flex flex-col justify-center w-full items-center">
        <h2>Wish List</h2>
      </div>
      <List />
    </div>
  );
}
