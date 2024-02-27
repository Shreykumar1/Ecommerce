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
    try {
      if(name === "" || email === "" || password === "" || address === ""||phone_number === ""){
        const error = {
          status : 400,
          msg : "Field Value Cannot be Empty"
      }
        return error
      }
      let sql = `insert into Customer values('${customer_id}','${name}','${email}','${password}','${address}',${pincode},'${phone_number}','${cart_id}','${role}');`
      const [registerUser,_]  = await db.query(sql);
      return {registerUser,cart_id,customer_id }; 
      
    } catch (error) {

      console.log(error);
      return error
    }


}


const loginUserFunc = async (email,password) => {
  try {
    let sql = `select customer_id , password , email , name, role , cart_id
    from customer
    where password = "${password}" and email = "${email}"`
    const [loginUser,_]  = await db.query(sql);
    return loginUser; 
  } catch (error) {
    return []
  }

}


module.exports = { getCustomer, emailAlreadyExists, registerUserFunc, loginUserFunc };
