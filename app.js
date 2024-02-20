const express = require('express');
const app = express();
const cors = require('cors');
const customerRouter = require('./routes/customerRoute');
const productRouter = require('./routes/productRoute');

const fileUpload = require('express-fileupload')
app.use(express.static('./public'))
app.use(fileUpload())


app.use(express.json());

app.use(cors());



app.use('/api/v1/customer',customerRouter);
app.use('/api/v1/products',productRouter);

app.get("*",(req,res) => {
    res.send({
        status : 404 ,
        msg : "Page Not Found..."
    })
})


app.listen(3000,()=>{
    console.log("Server is listening on port 3000");
})