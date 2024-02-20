const express = require('express')
const router = express.Router();

const {getAllCustomers, register} = require('../controllers/customerController')

router.route('/').get(getAllCustomers);
router.route('/register').post(register);



module.exports = router;