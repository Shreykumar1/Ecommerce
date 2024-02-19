const {getCustomer} = require('../model/customerModel')


const getAllCustomers = async (req,res) => {
    try {
        const customers = await getCustomer();
        res.send(customers)
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

module.exports = {
    getAllCustomers
}