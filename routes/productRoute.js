const express = require('express');
const { uploadProductImage } = require('../controllers/uploadsController');
const { createProduct, getAllProducts, getSingleProduct } = require('../controllers/productsController');
const router = express.Router();


router.route('/').post(createProduct).get(getAllProducts);
router.route('/:id').get(getSingleProduct);

router.route('/uploads').post(uploadProductImage);




module.exports = router;