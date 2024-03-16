'use client';
import React, { useState, useEffect, createContext, ReactNode } from 'react';
import { auth } from './firebaseConfigure';
import { User } from 'firebase/auth';

interface AuthContextProps {
  currentUser: User | null;
}

export const AuthContext = createContext<AuthContextProps>({
  currentUser: null,
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
