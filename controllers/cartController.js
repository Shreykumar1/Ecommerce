const { getAllCartItemsSql, createCartItemsSql, getSingleCartItemSql } = require("../model/cartModel");



const getAllCartItems = async (req,res) => {
    try {
        const cart = await getAllCartItemsSql();
        res.send(cart);
    } catch (error) {
        console.log(error);
        res.status(404).send({msg : error});
    }
}

const createCartItems = async (req,res) => {
    try {
        const { cart_quantity,cart_id,product_id,purchased } =  req.body;
        const cart = await createCartItemsSql(cart_quantity,cart_id,product_id,purchased);
        res.status(201).send({msg : cart,cart : {cart_quantity,cart_id,product_id,purchased}});
        // res.status(201).send(cart);
    } catch (error) {
        console.log(error);
        res.status(404).send({msg : error,});
    }
}

const getSingleCart = async (req,res) => {
    try {
        const {id} = req.params;
        console.log(id);
        const cart = await getSingleCartItemSql(id);
        res.send(cart);
    } catch (error) {
        console.log(error);
        res.status(404).send({msg : error});
    }
}





module.exports = {
    getAllCartItems,
    createCartItems,
    getSingleCart
}