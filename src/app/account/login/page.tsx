import React from 'react';

export default function Login() {
  return (
    <div className="flex flex-col justify-center w-full">
      <div>
        <h2>Login</h2>
      </div>
      <div className="flex flex-col items-center w-full">
        <input
          className="w-1/3 h-16 bg-gray-50 border-gray-200 border mb-4"
          type="string"
        />
        <input
          className="w-1/3 h-16 bg-gray-50 border-gray-200 border"
          type="password"
        />
      </div>
      <div>
        <button>Forgot your password?</button>
      </div>
      <div>
        <button>Sign In</button>
      </div>
      <div>
        <button>Create account</button>
      </div>
    </div>
  );
}
