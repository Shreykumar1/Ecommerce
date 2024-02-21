const { getAllProductsSql, createProductSql, getSingleProductsSql }= require('../model/productsModel')


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
        const { product_name,product_company,color,size,gender,cost,quantity,image } =  req.body;
        const {product,product_id} = await createProductSql(product_name,product_company,color,size,gender,cost,quantity,image)
        res.status(201).send({status : 201,user : {
            product_id,product_name,product_company,color,size,gender,cost,quantity,image
        }});
    } catch (error) {
        console.log(error);
        res.send(error);
    }

};


const getSingleProduct = async (req,res) => {
    const {id} = req.params;
    try {
        const product = await getSingleProductsSql(id);
        res.status(200).send(product);
    } catch (error) {
        console.log(error);
        res.status(404).send(error);
    }
}


module.exports = {
    getAllProducts,
    createProduct,
    getSingleProduct
}