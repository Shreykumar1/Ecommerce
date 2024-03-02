const path = require('path');



const uploadProductImage = async (req,res) => {
    if(!req.files){
        throw new Error("Upload File");
    }
    let productImage = req.files.image;
    if(!productImage.mimetype.startsWith('image')){
        throw new Error('Please Upload Image');
    }
    const maxSize = 1024 * 1024
    if(productImage.size >  maxSize){
        throw new Error('Please Upload Image Smaller than 1MB');
    }

    const imagePath = path.join(__dirname,'../public/uploads/'+`${productImage.name}`);
    console.log(imagePath);
    await productImage.mv(imagePath)
    return res.status(201).json({image : {src : `http://localhost:3000/uploads/${productImage.name}`}})
}




module.exports = {uploadProductImage}