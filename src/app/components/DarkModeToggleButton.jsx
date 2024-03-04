'use client';
import { IoSunnyOutline, IoSunnySharp } from 'react-icons/io5';
import { FaRegMoon, FaMoon } from 'react-icons/fa';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
export default function DarkModeToggleButton() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isMouseOverd, setIsMouseOverd] = useState(false);
  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const clickHandler = (props) => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  const mouseEnterLeaveHandler = (props) => {
    console.log(props);
    setIsMouseOverd(!isMouseOverd);
  };

  return (
    <button
      onClick={clickHandler}
      onMouseEnter={mouseEnterLeaveHandler}
      onMouseLeave={mouseEnterLeaveHandler}
    >
      {theme === 'light' ? (
        !isMouseOverd ? (
          <IoSunnyOutline />
        ) : (
          <IoSunnySharp />
        )
      ) : !isMouseOverd ? (
        <FaRegMoon />
      ) : (
        <FaMoon />
      )}
    </button>
  );
}
// import React from 'react';
// import { useAppSelector } from '../../hooks/useAppSelector';
// import UnfulfilledMoon from '../iconComponents/UnfulfilledMoon';
// import UnfullfilledSun from '../iconComponents/UnfullfilledSun';
// import { useAppDispatch } from '@/hooks/useAppDispatch';
// import { toggleDarkMode } from '../../slices/DarkModeSlice';

// export default function DarkModeButton() {
//   const isDarkMode = useAppSelector((state) => state.darkMode.isDarkMode);
//   const dispatch = useAppDispatch();
//   const clickHandler = () => {
//     dispatch(toggleDarkMode());
//   };

//   return (
//     <button style={{ width: '50px' }} onClick={clickHandler}>
//       {isDarkMode ? <UnfulfilledMoon /> : <UnfullfilledSun />}
//     </button>
//   );
// }
