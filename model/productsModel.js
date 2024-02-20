const db = require("../db/connect");
const ShortUniqueId = require('short-unique-id');



const getAllProductsSql = async () => {
    let sql = "select * from product";
    const [allProducts, _] = await db.execute(sql);
    return allProducts;
};

const createProductSql = async (product_name,product_company,color,size,gender,cost,quantity) => {

    const uid = new ShortUniqueId({ length: 4});
    const product_id = uid.rnd();

    let sql = `insert into Product values('${product_id}','${product_name}','${product_company}','${color}',${size},'${gender}',${cost},${quantity});`
    const [product,_]  = await db.query(sql);
    return {product,product_id }; 
}



module.exports = { getAllProductsSql, createProductSql }


