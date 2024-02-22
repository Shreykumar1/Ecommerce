const express = require('express');
const { getAllCartItems } = require('../controllers/cartController');
const router = express.Router();


router.route('/').get(getAllCartItems);




module.exports = router;