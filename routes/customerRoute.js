const express = require('express')
const router = express.Router();

const {getAllCustomers} = require('../controllers/customerController')

router.route('/customer').get(getAllCustomers);



module.exports = router;