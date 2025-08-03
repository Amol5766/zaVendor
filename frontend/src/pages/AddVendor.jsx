import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { toast } from 'react-toastify';
import axios from 'axios';
import arrow from '../assets/turn-right-arrow-svgrepo-com.svg';

const AddVendor = () => {
  const { user } = useAuth0();
  const post = import.meta.env.VITE_POST;

  const [vendor, setvendor] = useState({
    vendorName: '',
    accNumber: '',
    bankName: '',
    address1: '',
    address2: '',
    city: '',
    country: '',
    pincode: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setvendor((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleAddVendor(e) {
    e.preventDefault();
    await axios.post(post, vendor);
    toast.success(`Vendor ${vendor.vendorName} added successfully`);
    setvendor({
      vendorName: '',
      accNumber: '',
      bankName: '',
      address1: '',
      address2: '',
      city: '',
      country: '',
      pincode: '',
    });
  }

  return (
    <div className="bg-gray-50 dark:bg-black min-h-screen">
      <div className="flex flex-col items-center text-center px-4 sm:px-6 md:px-12 lg:px-24">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mt-8 underline decoration-wavy decoration-2">
          {`Welcome to zaVendor, ${user?.given_name}!`}
        </h1>

        <img
          src={user?.picture}
          alt="Profile"
          className="rounded-full shadow-md w-24 h-24 sm:w-32 sm:h-32 object-cover mt-4"
        />

        <div className="relative w-full flex flex-col items-center mt-20 sm:mt-24 mb-12">
          <p className="text-base sm:text-xl font-bold text-gray-800 dark:text-white px-4 max-w-md">
            You can enlist Vendor's over here {`${user?.given_name}!`}
          </p>
          <img
            src={arrow}
            alt="arrow"
            className="hidden sm:block rotate-12 object-contain h-60 w-40 absolute -left-20 -bottom-10 z-10"
          />
        </div>
      </div>

      <form
        onSubmit={handleAddVendor}
        className="w-full max-w-2xl mx-auto p-6 sm:p-8 bg-white dark:bg-gray-900 text-gray-800 dark:text-white shadow-2xl rounded-2xl mb-16"
      >
        <h2 className="text-xl sm:text-2xl font-semibold text-center mb-6">
          Vendor Details Form
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            name="vendorName"
            placeholder="Your Name"
            value={vendor.vendorName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 outline-none dark:bg-gray-800"
          />

          <input
            type="text"
            name="accNumber"
            placeholder="Your Account Number"
            value={vendor.accNumber}
            onChange={handleChange}
            pattern="\d{9,18}"
            maxLength={18}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 outline-none dark:bg-gray-800"
          />

          <input
            list="banks"
            name="bankName"
            value={vendor.bankName}
            onChange={handleChange}
            id="bank"
            placeholder="Choose your bank"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 outline-none dark:bg-gray-800"
          />
          <datalist id="banks">
            <option value="HDFC" />
            <option value="ICICI" />
            <option value="SBI" />
            <option value="Axis Bank" />
            <option value="Karnataka Bank" />
            <option value="Punjab National Bank" />
          </datalist>

          <input
            type="text"
            name="address1"
            value={vendor.address1}
            onChange={handleChange}
            placeholder="Address Line 1"
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 outline-none dark:bg-gray-800"
          />

          <input
            type="text"
            name="address2"
            value={vendor.address2}
            onChange={handleChange}
            placeholder="Address Line 2"
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 outline-none dark:bg-gray-800"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="city"
              value={vendor.city}
              onChange={handleChange}
              placeholder="City"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 outline-none dark:bg-gray-800"
            />

            <input
              type="text"
              name="country"
              value={vendor.country}
              onChange={handleChange}
              placeholder="Country"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 outline-none dark:bg-gray-800"
            />
          </div>

          <input
            type="text"
            name="pincode"
            value={vendor.pincode}
            onChange={handleChange}
            placeholder="ZIP Code"
            pattern="\d{6}"
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 outline-none dark:bg-gray-800"
          />

          <button
            type="submit"
            className="w-full py-2 mt-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddVendor;
