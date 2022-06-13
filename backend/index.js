//requiring module

import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

//database connection
mongoose.connect("mongodb://localhost:27017/deepnetsoft", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

//creating modal objects

//user modal schema

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    place:String
    
})

//product modal schema
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    quantity: Number,
    catagory:String
})


const User = new mongoose.model("User", userSchema)
const Product= new mongoose.model("products", productSchema)





//Routes

//Login API

app.post("/login", (req, res)=> {
    const { email, password} = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 


//Register API
app.post("/register", (req, res)=> {
    const { name, email, password,place} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                name,
                email,
                password,
                place
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
})
//add product API
app.post("/addproduct", (req,res) =>{
    const productDetails = req.body
    console.log("product Details >>>" ,
    productDetail);
    products.create(productDetails ,(err,data) =>{
        if(err){
            res.status(500).send(err.message)
        }else{
            res.status(201).send(data);
        }

    })
});



//port number
app.listen(9002,() => {
    console.log("port started at port 9002")
})