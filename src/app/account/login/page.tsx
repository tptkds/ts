import React from 'react';
import CreateAccount from './components/CreateAccount';
import Form from './components/Form';

export default function Login() {
  return (
    <div className="mt-14 flex flex-col justify-center w-full items-center">
      <div className="mb-4">
        <h2>Login</h2>
      </div>
      <Form />
      <div className="flex flex-col items-center w-full">
        <button>Forgot your password?</button>
      </div>
      <div className="flex flex-col items-center w-full">
        <CreateAccount />
      </div>
    </div>
  );
}
