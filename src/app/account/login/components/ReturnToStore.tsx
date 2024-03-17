import Link from 'next/link';
import React from 'react';

export default function ReturnToStore() {
  return (
    <Link href="/" className="underline underline-offset-4  mb-4">
      메인화면
    </Link>
  );
}
