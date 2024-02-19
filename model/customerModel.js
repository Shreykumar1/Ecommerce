const db = require('../db/connect');


const getCustomer = async () => {
    let sql = 'select * from customer'
    const [allCustomer,_] = await db.execute(sql);
    return allCustomer;
}


module.exports = {getCustomer}