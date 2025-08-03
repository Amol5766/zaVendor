const express= require("express")
const app=express()

require('dotenv').config();
const{connectDb}= require('./db')
const Routing = require('./router/venRouter')
const cors = require('cors')
let PORT = process.env.PORT;

connectDb();
app.use(cors())

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/api',Routing);

app.get('/',(req,res)=>{
    res.send('Vendor Application')
});

app.listen(PORT, (PORT, (err) => {
    if(err) throw err;
    console.log(`server running on port ${PORT}`)
}))