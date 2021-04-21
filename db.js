const mongoose = require('mongoose')
require('dotenv').config();
// promises

const connectDB = async () =>{

    try {
        
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useCreateIndex: true,
            useFindAndModify: true,
            useNewUrlParser: true,
            useUnifiedTopology:true
        })

        console.log(`MongoDb connected: ${conn.connection.host}`)

    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}


module.exports = connectDB