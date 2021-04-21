const express = require('express')
const app = express();
require('dotenv').config();
const port = process.env.PORT
const transactions = require('./routes/transactions')
const connectDB = require('./db');

app.use(express.json())
// set up troubleshooting route
app.get('/kaburu',(req,res)=>{
    return res.status(200).send("Kaburu loves programming")
})

connectDB();
// import routes
app.use('/transactions', transactions )

// listen to server
app.listen(port, ()=> console.log(`Server running on port: ${port}`))
