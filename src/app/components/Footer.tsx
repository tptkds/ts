import { FaGithub } from 'react-icons/fa';
import { SiVelog } from 'react-icons/si';
import React from 'react';

export default function Footer() {
  return (
    <footer className="relative bg-white bg-opacity-60  flex flex-col items-center py-6  shadow-md dark:bg-neutral-800 dark:text-white">
      <ul className="flex">
        <li className="mr-4">
          <FaGithub />
        </li>
        <li>
          <SiVelog />
        </li>
      </ul>
      <ul>
        <li>DEVELOPER: YOUGYEONG KIM</li>
        <li>EMAIL: tptkds12@gmail.com</li>
      </ul>
    </footer>
  );
}
