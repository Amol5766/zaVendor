import React from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {logout} = useAuth0();


     const isAddVendor = location.pathname === '/AddVendor';
     const isEditVendor = location.pathname === '/EditVendor';

  return (
    <>
      <nav className="flex items-center justify-between bg-gray-50 px-8">
        <div className="flex items-center gap-4 object-contain my-4 h-20 w-auto ">
          <img src="/zaVendor.png" alt="logo" className="h-20 " />
        </div>

        <div className="flex items-end gap-32">
          <button
            onClick={() => {
              navigate('/AddVendor');
            }}
            className={` ${
              isAddVendor ? 'bg-indigo-600' : 'bg-blue-500 hover:bg-indigo-600'
            } cursor-pointer px-4 py-2 text-sm text-white rounded transition`}
          >
            Add Vendor
          </button>

          <button
            onClick={() => {
              navigate('/EditVendor');
            }}
            className={` ${
              isEditVendor ? 'bg-indigo-600' : 'bg-blue-500 hover:bg-indigo-600'
            } cursor-pointer px-4 py-2 text-sm text-white rounded transition`}
          >
            View Vendors
          </button>
        </div>
        <button
          onClick={() => logout()}
          className="cursor-pointer px-4 py-2 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Sign Out
        </button>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar