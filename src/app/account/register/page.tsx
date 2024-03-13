import React from 'react';
import CreateButton from './components/CreateButton';
import { createUser } from '@/action';

export default function Register() {
  return (
    <div className="mt-14 flex flex-col justify-center w-full items-center">
      <div className="mb-4">
        <h2>Create Account</h2>
      </div>
      <form
        action={createUser}
        className="flex flex-col items-center w-full mb-4"
      >
        <div className="flex flex-col items-center w-full mb-4">
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="px-4 w-1/3 h-16 bg-gray-50 border-gray-200 border mb-4"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="px-4 w-1/3 h-16 bg-gray-50 border-gray-200 border mb-4"
          />
        </div>
        <div className="flex flex-col items-center w-full">
          <CreateButton />
        </div>
      </form>
    </div>
  );
}
