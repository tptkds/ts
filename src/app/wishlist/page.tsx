'use client';
import React, { useContext, useEffect, useState } from 'react';
import List from './components/List';
import { useRouter } from 'next/navigation';
import { AuthContext } from '../AuthProvider';

export default function WishlistComponent() {
  const router = useRouter();
  const { currentUser } = useContext(AuthContext);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  useEffect(() => {
    if (isLoaded)
      if (!currentUser) {
        alert('Login required service.');
        router.back();
      }
    if (!isLoaded) setIsLoaded(true);
  }, [isLoaded, currentUser]);

  return (
    <div>
      <div className="mt-14 flex flex-col justify-center w-full items-center">
        <h2>Wish List</h2>
      </div>
      <List />
    </div>
  );
}
