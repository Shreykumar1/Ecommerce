const db = require("../db/connect");
const ShortUniqueId = require('short-unique-id');



const getAllpaymentsSql = async () => {
    const sql = `select * from payment`
    const [payment,_] = await db.execute(sql);
    return payment;
}



module.exports = {
    getAllpaymentsSql
}