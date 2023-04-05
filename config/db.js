
const mongoose = require('mongoose')
require('dotenv').config()

const connection= mongoose.connect(process.env.mongo_url,{
    //must add in order to not get any error masseges:
    useUnifiedTopology:true,
    useNewUrlParser: true,
    useCreateIndex: true
})

module.exports= {
    connection
}