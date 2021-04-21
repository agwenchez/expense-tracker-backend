const mongoose = require('mongoose')
const Schema = mongoose.Schema


const TransactionSchema = new Schema({
    text:{
        type: String,
        required: ['Please enter a text']
    },
    amount:{
        type: Number,
        required: ['Please enter an amount']
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

module.exports= mongoose.model('Transaction', TransactionSchema);