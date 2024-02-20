const express = require('express');
const { uploadProductImage } = require('../controllers/uploadsController');
const router = express.Router();


router.route('/uploads').post(uploadProductImage);




module.exports = router;