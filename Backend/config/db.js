const mongoose = require('mongoose')
const connectDB = async() =>{
    try{
await mongoose.connect(process.env.MONGOURL)
console.log('MongoDB connected')
    }
    catch(err){
console.log(err)
    }
}
module.exports = connectDB