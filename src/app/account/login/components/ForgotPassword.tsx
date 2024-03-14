import Link from 'next/link';
import React from 'react';

export default function ForgotPassword() {
  return (
    <Link
      href="/account/reset-password"
      className="underline underline-offset-4 text-xs mb-4"
    >
      Forgot your password?
    </Link>
  );
}
