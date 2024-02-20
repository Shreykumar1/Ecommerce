const { getAllProductsSql, createProductSql }= require('../model/productsModel')


const getAllProducts = async (req, res) => {
    try {
        const allProducts = await getAllProductsSql();
        res.status(200).send(allProducts)
    } catch (error) {
        console.log(error);
        res.status(400).send({
            status : 400,
            msg : error
        })
    }

};


const createProduct = async (req, res) => {
    try {
        const { product_name,product_company,color,size,gender,cost,quantity } =  req.body;
        const {product,product_id} = await createProductSql(product_name,product_company,color,size,gender,cost,quantity)
        res.status(201).send({status : 201,user : {
            product_id,product_name,product_company,color,size,gender,cost,quantity
        }});
    } catch (error) {
        console.log(error);
        res.send(error)
    }

};


module.exports = {
    getAllProducts,
    createProduct
}