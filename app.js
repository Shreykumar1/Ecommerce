const express = require('express');
const app = express();
const cors = require('cors');
const customerRouter = require('./routes/customerRoute');

app.use(express.json());

app.use(cors());



app.use('/api/v1/customer',customerRouter)

app.get("*",(req,res) => {
    res.send({
        status : 404 ,
        msg : "Page Not Found..."
    })
})


app.listen(3000,()=>{
    console.log("Server is listening on port 3000");
})