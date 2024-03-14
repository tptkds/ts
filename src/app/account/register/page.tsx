import React from 'react';
import CreateButton from './components/CreateButton';
import Form from './components/Form';

export default function Register() {
  const handleSubmit = async () => {};
  return (
    <div className="mt-14 flex flex-col justify-center w-full items-center">
      <div className="mb-4">
        <h2>Create Account</h2>
      </div>
      <Form />
    </div>
  );
}
