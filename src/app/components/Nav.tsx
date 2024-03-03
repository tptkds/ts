'use client';
import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          Shop
          <ul>
            <li>
              <Link href="/">Tops</Link>
            </li>
            <li>
              <Link href="/">Bottoms</Link>
            </li>
            <li>
              <Link href="/">Dresses</Link>
            </li>
            <li>
              <Link href="/">Bags</Link>
            </li>
            <li>
              <Link href="/">Acc</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/">Login</Link>
        </li>
        <li>
          <Link href="/">Cart</Link>
        </li>
        <li>
          <button>Search</button>
        </li>
      </ul>
    </nav>
  );
}
