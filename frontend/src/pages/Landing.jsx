import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import ModelWrapper from '../components/Model';

const Landing = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/AddVendor');
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <ModelWrapper />

      {/* Navigation */}
      <nav className="flex items-center justify-between bg-transparent px-8 absolute top-0 w-full z-10">
        <div className="flex items-center gap-4 my-4 h-20 w-auto bg-[#ffe9e91f]">
          <img
            src="/zaVendor.png"
            alt="Zavender Logo"
            className="h-20 mix-blend-multiply"
          />
        </div>

        {!isAuthenticated ? (
          <button
            onClick={() => loginWithRedirect()}
            className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Sign In
          </button>
        ) : (
          <button
            onClick={() => logout({ returnTo: window.location.origin })}
            className="cursor-pointer bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Sign Out
          </button>
        )}
      </nav>

      {/* Landing Content */}
      <div className="min-h-screen flex items-center justify-center bg-transparent relative p-4">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-8 max-w-xl w-full text-center">
          <h1 className="text-3xl font-bold text-yellow-400 mb-4 text-stroke-black">
            Welcome to Zavender
          </h1>
          <p className="text-lg font-medium mb-2">
            Streamline your vendor operations and connect with suppliers
            efficiently. Zavender provides a seamless platform to register,
            manage, and monitor your vendor relationships — all in one place.
          </p>
          <p className="text-[#1d1c1c] text-sm opacity-80 mt-4">
            Get started by signing in to your dashboard and unlock the power of
            smart vendor management.
          </p>
        </div>
      </div>
    </>
  );
};

export default Landing;
