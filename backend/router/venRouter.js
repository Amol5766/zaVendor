const {Router} = require('express')

const { createVendor, getVendor, deleteOneVendor, updateVendor } = require('../controller/venController')

const router = Router();

router.post('/Vendor', createVendor);
router.get('/Vendor', getVendor);
router.delete('/Vendor/:id', deleteOneVendor);
router.patch('/Vendor/:id', updateVendor);

module.exports = router;