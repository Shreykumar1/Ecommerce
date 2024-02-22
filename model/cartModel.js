const db = require("../db/connect");
const ShortUniqueId = require('short-unique-id');


const getAllCartItemsSql = async () => {
    const sql = `select * from cart_item`
    const [cart,_] = await db.execute(sql);
    return cart;
}

const createCartItemsSql = async (cart_quantity,cart_id,product_id,purchased) => {
    let d = new Date();
    let yyyy = d.getFullYear();
    let mm = d.getMonth() + 1;
    let dd = d.getDate();

    let createdAtDate = `${yyyy}-${mm}-${dd}`
    const sql = `insert into cart_item values(${cart_quantity},'${createdAtDate}','${cart_id}','${product_id}','${purchased}')`
    const [cart,_] = await db.execute(sql);
    return cart;
}


module.exports = {
    getAllCartItemsSql,
    createCartItemsSql
}