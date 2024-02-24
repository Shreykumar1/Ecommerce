const db = require("../db/connect");



const getAllPayments = async (req,res) => {
    try {
        res.send("hello")
    } catch (error) {
        console.log(error);
        res.status(404).send({msg : error});
    }
}
const createPayment = async (req,res) => {
    try {
    } catch (error) {
        console.log(error);
        res.status(404).send({msg : error});
    }
}
const getSinglePayment = async (req,res) => {
    try {
    } catch (error) {
        console.log(error);
        res.status(404).send({msg : error});
    }
}

module.exports = {
    getAllPayments,
    createPayment,
    getSinglePayment
}