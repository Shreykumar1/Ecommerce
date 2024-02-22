const express = require('express');
const { getAllCartItems, createCartItems, getSingleCart, updateCart, deleteCartItem } = require('../controllers/cartController');
const router = express.Router();


router.route('/').get(getAllCartItems).post(createCartItems);
router.route('/:id').get(getSingleCart).patch(updateCart).delete(deleteCartItem)




module.exports = router;