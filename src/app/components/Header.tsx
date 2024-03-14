import React from 'react';
import Notice from './Notice';
import Nav from './Nav';
import Nav2 from './Nav2';

export default function Header() {
  return (
    <header className=" relative z-10">
      <Notice />
      <Nav2 />
    </header>
  );
}
