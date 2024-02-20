const {getCustomer, emailAlreadyExists, registerUserFunc} = require('../model/customerModel')


const getAllCustomers = async (req,res) => {
    try {
        const customers = await getCustomer();
        const sql = `select email from customer where email = "shreykumar@gmail.com";`
        const [execute,_] = await db.execute(sql);
        console.log(execute.length); 
        const [{email : sqlEmail}] = execute;
        console.log(sqlEmail);
        res.send(customers)
    } catch (error) {
        console.log(error);
        res.status(404).send({msg : error});
    }
}


const register = async (req, res) => {
    try {
        const { name, email, password, address, pincode, phone_number, role } =  req.body;
        const emailExists = await emailAlreadyExists(email);
        if(emailExists.length !== 0){
           return res.status(400).send({
                status : 400,
                msg : "Email Already Exists"
            })
        }
        const {registerUser,cart_id,customer_id} = await registerUserFunc( name, email, password, address, pincode, phone_number, role );
        console.log(registerUser);
        res.status(201).send({staus : 201,user : {
            customer_id ,name, email, password, address, pincode, phone_number,cart_id, role
        }});
    } catch (error) {
        console.log(error);
        res.send(error)
    }

  };


module.exports = {
    getAllCustomers,
    register
}