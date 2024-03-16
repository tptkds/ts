'use client';
import React, { useState, useEffect, createContext, ReactNode } from 'react';
import { auth, db } from './firebaseConfigure';
import { User } from 'firebase/auth';
import { DocumentReference, doc, getDoc } from 'firebase/firestore';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { AppDispatch } from '@/types/reduxTypes';
``;
import { setWishlist } from '@/slices/productSlict';

interface AuthContextProps {
  currentUser: User | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const AuthContext = createContext<AuthContextProps>({
  currentUser: null,
  setCurrentUser: () => null,
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const dispatch: AppDispatch = useAppDispatch();
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  async function getUserSnapshot(user: User) {
    let userDoc: DocumentReference | null = null;
    if (user.email) userDoc = doc(db, 'users', user.email);
    if (userDoc) return await getDoc(userDoc);
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      if (user) {
        getUserSnapshot(user).then((userSnap) => {
          const wishlist = userSnap?.data()?.wishlist;
          dispatch(setWishlist(wishlist));
          console.log(wishlist);
        });
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
