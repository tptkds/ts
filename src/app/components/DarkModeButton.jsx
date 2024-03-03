'use Client';

import React from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import UnfulfilledMoon from '../iconComponents/UnfulfilledMoon';
import UnfullfilledSun from '../iconComponents/UnfullfilledSun';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { toggleDarkMode } from '../../slices/DarkModeSlice';

export default function DarkModeButton() {
  const isDarkMode = useAppSelector((state) => state.darkMode.isDarkMode);
  const dispatch = useAppDispatch();
  const clickHandler = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <button style={{ width: '50px' }} onClick={clickHandler}>
      {isDarkMode ? <UnfulfilledMoon /> : <UnfullfilledSun />}
    </button>
  );
}
