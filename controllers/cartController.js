const { getAllCartItemsSql } = require("../model/cartModel");



const getAllCartItems = async (req,res) => {
    try {
        const cart = await getAllCartItemsSql();
        res.send(cart);
    } catch (error) {
        console.log(error);
        res.status(404).send({msg : error,});
    }
}





module.exports = {
    getAllCartItems
}