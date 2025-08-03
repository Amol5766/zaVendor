const { Schema, model } = require('mongoose');

const vendorSchema = new Schema({
  vendorName: {
    type: 'string',
    required: true,
  },
  accNumber: {
    type: 'number',
    required: true,
  },
  bankName: {
    type: 'string',
    required: true,
  },
  address1: {
    type: 'string',
  },
  address2: {
    type: 'string',
  },
  city: {
    type: 'string',
  },
  country: {
    type: 'string',
  },
  pincode: {
    type: 'number',
    length: 6,
  },
});

module.exports = model('vendor', vendorSchema);