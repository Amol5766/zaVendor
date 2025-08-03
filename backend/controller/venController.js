const vendorSchema = require('../model/vendorSchema');

exports.createVendor = async (req,res) => {
    let payload = {
      vendorName: req.body.vendorName,
      accNumber: req.body.accNumber,
      bankName: req.body.bankName,
      address1: req.body.address1,
      address2: req.body.address2,
      city: req.body.city,
      country: req.body.country,
      pincode: req.body.pincode,
    };
    await vendorSchema.create(payload);
    res.json({success:true, messsage: 'vendor details saved successfully',payload})
};

exports.getVendor = async(req, res)=>{
    let payload = await vendorSchema.find();
    res.json({success:true, message:"vendor details fetched Successfully",payload});
};

exports.deleteOneVendor = async (req, res)=>{
  let vendor = await vendorSchema.findOne({_id: req.params.id})
  await vendorSchema.findByIdAndDelete(vendor._id);
  res.json({
    success: true,
    message: 'Vendor deleted successsfully!',
    vendor
  })
}

exports.updateVendor = async (req, res) => {
    const payload = await vendorSchema.findOne({ _id: req.params.id });

    payload.vendorName = req.body.vendorName;
    payload.accNumber = req.body.accNumber;
    payload.bankName = req.body.bankName;
    payload.address1 = req.body.address1;
    payload.address2 = req.body.address2;
    payload.city = req.body.city;
    payload.country = req.body.country;
    payload.pincode = req.body.pincode;

    await payload.save();


    res.status(200).json({
      success: true,
      message: 'Vendor updated successsfully!',payload
    });
};

