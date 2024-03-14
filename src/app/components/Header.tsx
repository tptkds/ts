import React from 'react';
import Notice from './Notice';
import Nav from './Nav';

export default function Header() {
  return (
    <header className=" relative z-10">
      <Notice />
      <Nav />
    </header>
  );
}
