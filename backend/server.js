const express= require("express")
const app=express()

require('dotenv').config();
const{connectDb}= require('./db')
const Routing = require('./router/venRouter')
const cors = require('cors')
const PORT = process.env.PORT || 5003;

connectDb();
app.use(cors())

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/api',Routing);

app.get('/',(req,res)=>{
    res.json('Vendor Backend Running')
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});






