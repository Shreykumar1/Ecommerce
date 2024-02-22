const express = require('express');
const { getAllCartItems, createCartItems } = require('../controllers/cartController');
const router = express.Router();


router.route('/').get(getAllCartItems).post(createCartItems);




module.exports = router;