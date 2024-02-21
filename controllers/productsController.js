const { getAllProductsSql, createProductSql, getSingleProductsSql, deleteProductSql }= require('../model/productsModel')


const getAllProducts = async (req, res) => {
    try {
        let filterArray = []
        const {name,company,size,gender,cost} = req.query;
        if(name){
             filterArray.push(`product_name = "${name}"`)
        }
        if(company){
             filterArray.push(`product_company = "${company}"`)
        }
        if(size){
             filterArray.push(`size = ${size}`)
        }
        if(gender){
             filterArray.push(`gender = "${gender}"`)
        }
        if(cost){
             filterArray.push(`cost < "${cost}"`)
        }

        let filterString = ""
        if(filterArray.length > 0){
            filterString =  filterString + "where "
            filterString = filterString + filterArray.join(" and ");
        }


        const allProducts = await getAllProductsSql(filterString);
        res.status(200).send({products : allProducts})
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
        if(product.length === 0){
            return res.status(404).send({
                status : 404,
                msg : `product with id ${id} not found`
            })
        }
        res.status(200).send(product);
    } catch (error) {
        console.log(error);
        res.status(404).send(error);
    }
}


const deleteProduct = async (req,res) => {
    const {id} = req.params;
    try {
        const productExists = await getSingleProductsSql(id);
        if(productExists.length === 0){
            return res.status(404).send({
                status : 404,
                msg : `product with id ${id} not found`
            })
        }
        const product = await deleteProductSql(id);
        res.status(200).send(product);
    } catch (error) {
        console.log(error);
        res.status(404).send(error);
    }
}

module.exports = {
    getAllProducts,
    createProduct,
    getSingleProduct,
    deleteProduct
}