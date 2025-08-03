import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const UpdateBtn = ({ vendorData, onUpdate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    vendorName: '',
    accNumber: '',
    bankName: '',
    address1: '',
    address2: '',
    city: '',
    country: '',
    pincode: '',
  });

  const handleOpen = () => {
    setFormData({
      vendorName: vendorData.vendorName || '',
      accNumber: vendorData.accNumber || '',
      bankName: vendorData.bankName || '',
      address1: vendorData.address1 || '',
      address2: vendorData.address2 || '',
      city: vendorData.city || '',
      country: vendorData.country || '',
      pincode: vendorData.pincode || '',
    });
    setIsOpen(true);
  };

  const handleClose = () => setIsOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
const handleSubmit = async () => {
  try {
    const url = `${import.meta.env.VITE_POST}/${vendorData._id}`;
    const res = await axios.patch(url, formData);
    toast.success(`Updated vendor ${formData.vendorName}`);
    onUpdate();
    handleClose();
  } catch (error) {
    console.error('Update failed:', error.response?.data || error.message);
    toast.error('Failed to update vendor. Please try again.');
  }
};


  return (
    <>
      <button
        onClick={handleOpen}
        className="cursor-pointer text-blue-500 hover:text-blue-700 font-semibold"
      >
        Edit
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-md">
            <h2 className="text-xl font-bold mb-4 text-black dark:text-white">
              Update Vendor
            </h2>

            <div className="space-y-3">
              <input
                type="text"
                name="vendorName"
                value={formData.vendorName}
                onChange={handleChange}
                placeholder="Vendor Name"
                className="w-full px-3 py-2 border rounded text-black"
              />
              <input
                type="text"
                name="accNumber"
                value={formData.accNumber}
                onChange={handleChange}
                placeholder="Account Number"
                className="w-full px-3 py-2 border rounded text-black"
              />
              <input
                type="text"
                name="bankName"
                value={formData.bankName}
                onChange={handleChange}
                placeholder="Bank Name"
                className="w-full px-3 py-2 border rounded text-black"
              />
              <input
                type="text"
                name="address1"
                value={formData.address1}
                onChange={handleChange}
                placeholder="address1"
                className="w-full px-3 py-2 border rounded text-black"
              />
              <input
                type="text"
                name="address2"
                value={formData.address2}
                onChange={handleChange}
                placeholder="address2"
                className="w-full px-3 py-2 border rounded text-black"
              />
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="city"
                className="w-full px-3 py-2 border rounded text-black"
              />
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="country"
                className="w-full px-3 py-2 border rounded text-black"
              />
              <input
                type="number"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                placeholder="pincode"
                className="w-full px-3 py-2 border rounded text-black"
              />
            </div>

            <div className="flex justify-end mt-4 space-x-4">
              <button
                onClick={handleClose}
                className="cursor-pointer px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 text-black"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="cursor-pointer px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UpdateBtn;
