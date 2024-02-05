const express=require('express');
const connectToMongo=require('./database/db')
const routes=require("./routes/todoroutes");
const app=express();
const cors = require("cors");
connectToMongo();


app.use(express.json());
app.use(cors());



app.use('/api',routes);
const port =8000;
app.listen(port,()=>console.log('your server is runner at http://localhost:8000'))
