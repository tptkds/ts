import React from 'react';
import Search from './Search';
import User from './User';
import LogoLink from './LogoLink';
import Menu from './Menu';
import WishlistLink from './WishlistLink';
import CartLink from './CartLink';

export default function Nav() {
  return (
    <nav className="flex relative min-width-313 items-center m-4 header-bottom sticky h-16 shadow-md rounded-xl bg-white bg-opacity-80 dark:bg-black dark:bg-opacity-60 dark:text-white">
      <div className="flex basis-1/3 order-1 justify-center  md:justify-normal md:order-0 md:ml-8 md:order-0">
        <h1 className="md:mr-2 text-xs font-normal flex items-center ">
          <LogoLink />
        </h1>
      </div>

      <div className="flex basis-1/3 items-center order-0  md:order-1 md:justify-evenly">
        <Menu />
      </div>

      <div className="flex basis-1/3 justify-end text-xs items-center order-2">
        <div className="mr-2 md:mr-4">
          <Search />
        </div>
        <div className="mr-2 md:mr-4">
          <User />
        </div>
        <div className="mr-2 md:mr-4">
          <WishlistLink />
        </div>
        <div className="mr-8">
          <CartLink />
        </div>
      </div>
    </nav>
  );
}
