const db = require("../db/connect");
const ShortUniqueId = require('short-unique-id');


const getAllCartItemsSql = async () => {
    const sql = `select * from cart_item`
    const [cart,_] = await db.execute(sql);
    return cart;
}


module.exports = {
    getAllCartItemsSql
}