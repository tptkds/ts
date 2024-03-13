'use client';
import { useFormStatus } from 'react-dom';
import React from 'react';

export default function CreateButton() {
  const { pending } = useFormStatus();
  return (
    <button
      className="btn w-1/3"
      type="submit"
      aria-disabled={pending}
      disabled={pending}
    >
      {pending ? 'Creating...' : 'Create'}
    </button>
  );
}
