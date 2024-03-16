import { FaGithub } from 'react-icons/fa';
import { SiVelog } from 'react-icons/si';
import React from 'react';

export default function Footer() {
  return (
    <footer className=" px-4 sm:px-12 py-14 relative bg-white bg-opacity-60  flex flex-col items-center  shadow-md dark:bg-zinc-900 dark:text-white">
      <ul className="flex text-lg mb-4">
        <li className="mr-4">
          <FaGithub />
        </li>
        <li>
          <SiVelog />
        </li>
      </ul>
      <ul className="text-xs">
        <li>
          <p>@2024 kimyougyoung</p>
        </li>
      </ul>
    </footer>
  );
}
