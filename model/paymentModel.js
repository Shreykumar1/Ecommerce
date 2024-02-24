const db = require("../db/connect");
const ShortUniqueId = require('short-unique-id');



const getAllpaymentsSql = async () => {
    let cart_id = "ruTZp"

    const sql = `select * from payment`
    const [payment,_] = await db.execute(sql);
    return payment;
}

const createPaymentSql = async (payment_type,customer_id,cart_id) => {
    let d = new Date();
    let yyyy = d.getFullYear();
    let mm = d.getMonth() + 1;
    let dd = d.getDate();

    const uid = new ShortUniqueId({ length: 7});
    const payment_id = uid.rnd();

    let createdAtDate = `${yyyy}-${mm}-${dd}`
    // Total Amount 
    const amountSql = `select  sum(cost) as total from product where product_id in 
    ( select product_id from cart_item
    where cart_id = "${cart_id}" and purchased = "no" );`
    const [[{total}]] = await db.execute(amountSql);
    if(!total){
         return {error : {status : 404, msg : "No Item In cart"}};
    }

    const sql = `insert into payment values('${payment_id}','${createdAtDate}','${payment_type}','${customer_id}','${cart_id}','${total}')`
    const [payment,_] = await db.execute(sql);
    let purchasedSql = `UPDATE cart_item
    SET purchased = "yes" WHERE  cart_id ='${cart_id}'`
    const updatePurchased = await db.execute(purchasedSql);
    return {payment,obj : {payment_id,payment_date : createdAtDate,payment_type,customer_id,cart_id,total_amount : total},updatePurchased};
}


module.exports = {
    getAllpaymentsSql,
    createPaymentSql
}