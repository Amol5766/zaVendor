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
    setvendor((prevState) => ({
      ...prevState,
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
    <div className="bg-gray-50">
      <div className="flex flex-col items-center justify-center text-center px-4 relative">
        <h1 className="text-3xl font-bold text-gray-800 mt-8 underline decoration-wavy decoration-2">
          {`Welcome to zaVendor, ${user?.given_name}!`}
        </h1>
        <br />
        <img
          src={user?.picture}
          alt="Profile"
          className="rounded-full shadow-md w-32 h-32 object-cover"
        />

        <div className="relative w-full h-28 flex flex-col items-center mt-24">
          <p className="absolute text-xl font-bold text-gray-800 font-sans">
            You can enlist Vendor's over here{' '}
            {`${user?.given_name}!`}
          </p>
          <img
            src={arrow}
            alt="arrow"
            className="rotate-12 object-fill h-72 w-60 relative right-44 bottom-14 z-10"
          />
        </div>
      </div>

      <form
        onSubmit={handleAddVendor}
        className="max-w-2xl mx-auto p-6 bg-white shadow-2xl rounded-2xl space-y-4 dark:bg-gray-900 dark:text-white mb-16"
      >
        <h2 className="text-2xl font-semibold text-center mb-4">
          Vendor Details Form
        </h2>

        <input
          type="text"
          name="vendorName"
          placeholder="Your Name"
          value={vendor.vendorName}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none dark:bg-gray-800 dark:border-gray-600"
        />
        <input
          type="text"
          name="accNumber"
          placeholder="Your Account Number"
          value={vendor.accNumber}
          onChange={handleChange}
          pattern="\d{9}"
          maxLength={18}
          required
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none dark:bg-gray-800 dark:border-gray-600"
        />

        <div>
          <input
            list="banks"
            name="bankName"
            value={vendor.bankName}
            onChange={handleChange}
            id="bank"
            placeholder="Choose your bank"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none dark:bg-gray-800 dark:border-gray-600"
          />
          <datalist id="banks">
            <option value="HDFC" />
            <option value="ICICI" />
            <option value="SBI" />
            <option value="Axis Bank" />
            <option value="Karnataka Bank" />
            <option value="Punjab National Bank" />
          </datalist>
        </div>

        <input
          type="text"
          name="address1"
          value={vendor.address1}
          onChange={handleChange}
          placeholder="Address Line 1"
          required
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none dark:bg-gray-800 dark:border-gray-600"
        />

        <input
          type="text"
          name="address2"
          value={vendor.address2}
          onChange={handleChange}
          placeholder="Address Line 2"
          required
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none dark:bg-gray-800 dark:border-gray-600"
        />

        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="city"
            value={vendor.city}
            onChange={handleChange}
            placeholder="City"
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none dark:bg-gray-800 dark:border-gray-600"
          />

          <input
            type="text"
            name="country"
            value={vendor.country}
            onChange={handleChange}
            placeholder="Country"
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none dark:bg-gray-800 dark:border-gray-600"
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
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none dark:bg-gray-800 dark:border-gray-600"
        />

        <button
          type="submit"
          className="w-full mt-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddVendor;
