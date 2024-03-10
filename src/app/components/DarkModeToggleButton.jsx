'use client';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import '@theme-toggles/react/css/Classic.css';
import { Classic } from '@theme-toggles/react';
export default function DarkModeToggleButton() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const handleClick = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  return (
    <>
      <Classic
        duration={750}
        toggled={theme === 'dark'}
        onToggle={handleClick}
      />
    </>
  );
}
