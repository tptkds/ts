import Link from 'next/link';
import React from 'react';

export default function CreateAccount() {
  return (
    <Link
      href="/account/register"
      className="underline underline-offset-4  mb-4"
    >
      회원가입
    </Link>
  );
}
