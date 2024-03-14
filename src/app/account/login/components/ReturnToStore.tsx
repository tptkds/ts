import Link from 'next/link';
import React from 'react';

export default function ReturnToStore() {
  return (
    <Link href="/" className="underline underline-offset-4 text-xs mb-4">
      Return to store
    </Link>
  );
}
