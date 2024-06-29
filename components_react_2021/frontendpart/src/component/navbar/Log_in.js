import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Login successful:', result);
      // Perform further actions, such as redirecting the user or storing tokens
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login errors (e.g., display an error message to the user)
    }
  };

  const handleGoogleSignIn = () => {
    // Placeholder logic for Google Sign-In
    console.log('Google Sign-In');
    // Here you would integrate with Google Sign-In API or a third-party library like Firebase
  };

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/bc_login.png')" }}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-4/12 h-4/5 flex flex-col items-center  p-8 rounded-lg">
        <div className="text-center mb-8">
          <p className="text-3xl font-normal tracking-wide ">Welcome Back ! </p>
          <p className="text-2xl font-normal">To Guidance-Hub</p>
        </div>

        <div className="mb-6 w-10/12 ">
          <button
            onClick={handleGoogleSignIn}
            className="hover:bg-slate-100 text-xl google-logo border p-2 rounded-lg w-full border-blue-300 font-light"
          >
            Continue with Google
          </button>
        </div>

        <div className="flex items-center mb-6 w-full">
          <div className="border-t border-gray-300 flex-grow"></div>
          <p className="mx-3 text-gray-500">Or Log in with email</p>
          <div className="border-t border-gray-300 flex-grow"></div>
        </div>

        <form onSubmit={handleSubmit} className=" flex flex-col  w-10/12">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-7 p-2 w-full border text-xl border-blue-300 rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            className="mb-2 p-2 w-full border text-xl  border-blue-300 rounded-lg"
          />
           
           <div className=" mb-6 ">
            <a href="/forgot-password" className="text-blue-500 ">Forgot Password?</a>
          </div>
          <button
            type="submit"
            className="p-2 rounded-xl bg-blue-500 text-white  hover:bg-blue-700 w-11/12"
          >
            Log in
          </button>
        </form>

        <div className="mt-4">
          <p className="text-gray-500">
            Don't have an account? <a href="/signup" className="text-blue-500">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
