import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  const navigate = useNavigate();
  console.log(user);
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/AddVendor');
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <nav className="flex items-center justify-between px-6 py-4 bg-gray-100">
        <img src="/zaVendor.png" alt="logo" className="h-10" />

        {!isAuthenticated ? (
          <button
            onClick={() => loginWithRedirect()}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Sign In
          </button>
        ) : (
          <button
            onClick={() => logout({ returnTo: window.location.origin })}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Sign Out
          </button>
        )}
      </nav>

      <main className="p-6">{/* Optional main content */}</main>
    </>
  );
};

export default Landing;
