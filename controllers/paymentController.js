const db = require("../db/connect");
const { getAllpaymentsSql, createPaymentSql } = require("../model/paymentModel");



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
        const {payment_type,customer_id,cart_id} = req.body;
        const {payment,obj,error} = await createPaymentSql(payment_type,customer_id,cart_id);
        if(error){
           return res.status(404).send(error)
        }
        res.status(201).send({payments : obj,status : 201,msg : "Payment Created"})
    } catch (error) {
        console.log(error);
        res.status(404).send(error);
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