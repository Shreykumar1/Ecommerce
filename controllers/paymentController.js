const db = require("../db/connect");
const { getAllpaymentsSql } = require("../model/paymentModel");



const getAllPayments = async (req,res) => {
    try {
        const payments = await getAllpaymentsSql();
        res.status(200).send({payments})
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