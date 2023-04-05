const mongoose= require("mongoose");

const userSchema= mongoose.Schema({
    
    name: String,
    gender: String,
    dob: String,
    city: String,
    pincode: Number
    
})

const UserModel= mongoose.model("user",userSchema)

module.exports={
    UserModel
}