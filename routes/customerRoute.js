const express = require('express')
const router = express.Router();

const {getAllCustomers, register, login} = require('../controllers/customerController')

router.route('/').get(getAllCustomers);
router.route('/register').post(register);
router.route('/login').post(login);



module.exports = router;