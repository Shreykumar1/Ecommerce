const db = require("../db/connect");
const ShortUniqueId = require('short-unique-id');


const getCustomer = async () => {
  let sql = "select * from customer";
  const [allCustomer, _] = await db.execute(sql);
  return allCustomer;
};

const emailAlreadyExists = async (email) => {
  const sql = `select email from customer where email = "${email}";`;
  const [execute, _] = await db.execute(sql);
  return execute;
};

const registerUserFunc = async (name,email,password,address,pincode,phone_number,role) => {

    const uid = new ShortUniqueId({ length: 5});
    const cart_id = uid.rnd();

    const cid = new ShortUniqueId({ length : 6 })
    const customer_id = cid.rnd();

    try {
        let addCartId = `insert into cart values('${cart_id}')`;
        const [addCart,_] = await db.execute(addCartId);
    } catch (error) {
        console.log(error);
    }



    let sql = `insert into Customer() values('${customer_id}','${name}','${email}','${password}','${address}',${pincode},${phone_number},'${cart_id}','${role}');`
    const [registerUser,_]  = await db.query(sql);
    console.log("Error",registerUser);
    return {registerUser,cart_id,customer_id }; 
}


module.exports = { getCustomer, emailAlreadyExists, registerUserFunc };
