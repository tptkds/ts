import Link from 'next/link';
import React from 'react';

export default function ReturnToLogin() {
  return (
    <Link
      href="/account/login"
      className="underline underline-offset-4 text-xs mb-4"
    >
      Return to login
    </Link>
  );
}
