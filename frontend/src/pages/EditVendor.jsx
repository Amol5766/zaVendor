import React, { useEffect, useState } from 'react';
import { Pagination } from '@mui/material';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UpdateBtn from '../components/UpdateBtn';

const EditVendor = () => {
  const get = import.meta.env.VITE_POST;
  console.log(get);
  const [page, setPage] = useState(1);

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

  const [vendors, setVendors] = useState([]);

  const fetchVendors = async () => {
    try {
      const res = await axios.get(get);
      console.log('API Response:', res.data);

      if (res.data && res.data.success && Array.isArray(res.data.payload)) {
        setVendors(res.data.payload);
      } else {
        toast.error('Invalid response from server.');
      }
    } catch (error) {
      console.error('Fetch Error:', error);
      toast.error('Failed to fetch vendor data.');
    }
  };

  useEffect(() => {
    fetchVendors();
    console.log('data fetched');
  }, []);

  const confirmDelete = (id, name, onConfirm) => {
    toast(
      ({ closeToast }) => (
        <div className="text-sm">
          <p className="font-semibold text-red-500 mb-2">
            Are you sure you want to delete{' '}
            <span className="underline">{name}</span>?
          </p>
          <div className="flex justify-end space-x-2">
            <button
              className=" cursor-pointer px-3 py-1 text-xs bg-gray-200 rounded hover:bg-gray-300"
              onClick={closeToast}
            >
              Cancel
            </button>
            <button
              className="cursor-pointer px-3 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600"
              onClick={() => {
                onConfirm();
                closeToast();
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ),
      {
        position: 'top-right',
        autoClose: false,
        closeOnClick: false,
        closeButton: false,
        draggable: false,
        hideProgressBar: true,
        style: { border: '2px solid #f87171', borderRadius: '10px' },
      }
    );
  };

  const removeVendor = (id, name) => {
    confirmDelete(id, name, async  () => {
      try {
        await axios.delete(`${get}/${id}`);
        await fetchVendors();
        toast.success(`✅ Vendor "${name}" deleted successfully!`, {
          position: 'top-right',
          style: { border: '2px solid green', borderRadius: '10px' },
        });
      } catch (error) {
        toast.error('Failed to delete vendor.');
      }
    });
  };

  const itemsPerPage = 6;
  const handleChange = (event, value) => {
    setPage(value);
  };

  const paginatedVendors = Array.isArray(vendors)
    ? vendors.slice((page - 1) * itemsPerPage, page * itemsPerPage)
    : [];

  return (
    <div className="bg-gray-50 p-6">
      <h2 className="text-3xl font-bold mb-4 text-gray-300 text-stroke ">
        All Vendors List
      </h2>

      <div className="space-y-4 mb-6">
        {paginatedVendors.map((vendor, index) => (
          <div
            key={vendor._id || index}
            className="p-4 rounded shadow border dark:bg-gray-800 dark:text-white"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-2xl font-semibold underline">
                {vendor.vendorName}
              </h3>

              <div className="flex space-x-4">
                <UpdateBtn vendorData={vendor} onUpdate={fetchVendors} />
                <span className="text-gray-500">/</span>
                <button
                  onClick={() => removeVendor(vendor._id, vendor.vendorName)}
                  className="cursor-pointer text-red-500 hover:text-red-700 font-semibold"
                >
                  Delete
                </button>
              </div>
            </div>

            <p>
              <span className="text-l font-medium">Bank:</span>&nbsp;
              {vendor.bankName}
            </p>
            <p>
              <span className="text-l font-medium">Acc No:</span>&nbsp;
              {vendor.accNumber}
            </p>
          </div>
        ))}
      </div>

      <Pagination
        count={Math.ceil(vendors.length / itemsPerPage)}
        page={page}
        onChange={handleChange}
        color="primary"
        variant="outlined"
        shape="rounded"
      />
    </div>
  );
};

export default EditVendor;
