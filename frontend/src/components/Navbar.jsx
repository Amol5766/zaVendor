import React, { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth0();
  const [menuOpen, setMenuOpen] = useState(false);

  const isAddVendor = location.pathname === '/AddVendor';
  const isEditVendor = location.pathname === '/EditVendor';

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <nav className="bg-gray-50 dark:bg-black px-4 sm:px-8 py-4 shadow-md">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <img src="/zaVendor.png" alt="logo" className="h-12 sm:h-20" />
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => navigate('/AddVendor')}
              className={`${
                isAddVendor
                  ? 'bg-indigo-600'
                  : 'bg-blue-500 hover:bg-indigo-600'
              } px-4 py-2 text-sm text-white rounded transition`}
            >
              Add Vendor
            </button>

            <button
              onClick={() => navigate('/EditVendor')}
              className={`${
                isEditVendor
                  ? 'bg-indigo-600'
                  : 'bg-blue-500 hover:bg-indigo-600'
              } px-4 py-2 text-sm text-white rounded transition`}
            >
              View Vendors
            </button>

            <button
              onClick={() => logout()}
              className="px-4 py-2 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Sign Out
            </button>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-xl text-gray-800 dark:text-white"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4">
            <button
              onClick={() => {
                navigate('/AddVendor');
                toggleMenu();
              }}
              className={`${
                isAddVendor
                  ? 'bg-indigo-600'
                  : 'bg-blue-500 hover:bg-indigo-600'
              } px-4 py-2 text-sm text-white rounded transition`}
            >
              Add Vendor
            </button>

            <button
              onClick={() => {
                navigate('/EditVendor');
                toggleMenu();
              }}
              className={`${
                isEditVendor
                  ? 'bg-indigo-600'
                  : 'bg-blue-500 hover:bg-indigo-600'
              } px-4 py-2 text-sm text-white rounded transition`}
            >
              View Vendors
            </button>

            <button
              onClick={() => {
                logout();
                toggleMenu();
              }}
              className="px-4 py-2 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Sign Out
            </button>
          </div>
        )}
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
