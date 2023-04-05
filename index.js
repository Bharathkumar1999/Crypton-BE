const express= require("express");
import dotenv from 'dotenv'
dotenv.config()

const cors= require("cors");
const {usersRouter}= require("./routes/users.route");

// const {authenticate}= require("./middleswares/authentication")

const {connection}= require("./config/db")
const {UserModel}= require("./models/User.model")

const app= express();

app.use(express.json())
app.use(cors({
    origin: "*"
}))

app.get("/",(req,res)=>{
    res.send("Welcome")
})

app.use("/users",usersRouter)


app.listen(8080,async()=>{
    try{
        await connection;
        console.log("Connected to DB Successfully");
    }
    catch(err){
        console.log("Error connecting to DB");
        console.log(err)
    }
    console.log("Listening on PORT 8080")
})