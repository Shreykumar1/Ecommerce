const express = require('express');
const { getAllCartItems, createCartItems, getSingleCart } = require('../controllers/cartController');
const router = express.Router();


router.route('/').get(getAllCartItems).post(createCartItems);
router.route('/:id').get(getSingleCart)




module.exports = router;