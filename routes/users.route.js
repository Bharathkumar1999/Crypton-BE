const express= require("express");

const {UserModel}= require("../models/User.model")

const usersRouter= express.Router();

usersRouter.get("/", async(req,res)=>{
    const users= await UserModel.find()
    res.send(users)
})

usersRouter.post("/",async(req,res)=>{
    const payload= req.body
    try{
        const new_User= new UserModel(payload)
        await new_User.save()
        res.send({"msg":"User created successfully"})

    }
    catch(err){
        console.log(err);
        res.send({"err":"Something went wrong"})

    }
    
})

usersRouter.patch("/:UserID",async(req,res)=>{
    const payload= req.body;
    const UserID= req.params.UserID;
    const userID= req.body.userID
    const User= await UserModel.findOne({_id:UserID})
    if(userID !== User.userID){
        res.send("Not authorised")
    }
    else{
        await UserModel.findByIdAndUpdate({_id: UserID},payload)
        res.send({"msg": "User updated successfully"})
    }
})

usersRouter.delete("/:UserID",async(req,res)=>{
    const UserID= req.params.UserID;
    const userID= req.body.userID
    const User= await UserModel.findOne({_id:UserID})
    if(userID !== User.userID){
        res.send("Not authorised")
    }
    else{
        await UserModel.findByIdAndDelete({_id: UserID})
        res.send({"msg": "User deleted successfully"})
    }
    
})

module.exports= {usersRouter}