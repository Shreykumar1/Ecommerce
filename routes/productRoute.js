const express = require('express');
const { uploadProductImage } = require('../controllers/uploadsController');
const { createProduct, getAllProducts } = require('../controllers/productsController');
const router = express.Router();


router.route('/').post(createProduct).get(getAllProducts);
router.route('/uploads').post(uploadProductImage);




module.exports = router;