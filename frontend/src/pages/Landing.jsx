import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import ModelWrapper from '../components/Model';

const Landing = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/AddVendor');
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <ModelWrapper />


      <nav className="flex flex-col flex-row items-center justify-between px-4 md:px-8 py-4 absolute top-0 w-full z-10">
        <div className="flex items-center gap-4 h-16 md:h-20 w-auto bg-[#ffe9e91f] mb-4 md:mb-0">
          <img
            src="/zaVendor.png"
            alt="Zavendor Logo"
            className="h-16 md:h-20 mix-blend-multiply"
          />
        </div>

        <div className="w-full md:w-auto flex justify-end">
          {!isAuthenticated ? (
            <button
              onClick={() => loginWithRedirect()}
              className="cursor-pointer bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 md:w-full w-fit md:w-auto"
            >
              Sign In
            </button>
          ) : (
            <button
              onClick={() => logout({ returnTo: window.location.origin })}
              className="cursor-pointer bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600 w-full md:w-auto"
            >
              Sign Out
            </button>
          )}
        </div>
      </nav>


      <div className="min-h-screen flex items-center justify-center bg-transparent relative px-4 py-32 md:py-20">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-xl text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-4 text-stroke-black">
            Welcome to Zavendor
          </h1>
          <p className="text-base sm:text-lg font-medium mb-2 text-white">
            Streamline your vendor operations and connect with suppliers
            efficiently. Zavender provides a seamless platform to register,
            manage, and monitor your vendor relationships — all in one place.
          </p>
          <p className="text-white text-sm opacity-80 mt-4">
            Get started by signing in to your dashboard and unlock the power of
            smart vendor management.
          </p>
        </div>
      </div>
    </>
  );
};

export default Landing;
