const express = require('express')
const router = express.Router()
const Transaction = require('../models/Transactions')

// get all transactions
router.get('/all', async (req,res)=>{
    try {      
        const allTrans = await Transaction.find()
        return res.status(200).send(allTrans)
    } catch (error) {
        return res.status(500).send(error)
    }
})

// add a new transaction
router.post('/add',async (req,res)=>{
    const {text,amount} = req.body;
    // const text = req.body.text;
    // const amount = req.body.amount
   try {
       
   const newTrans = await Transaction.create(req.body)
   return res.status(200).send("created successfully")
   } catch (error) {
       console.log(error)
    return res.status(500).send(error)
   }

})



module.exports = router