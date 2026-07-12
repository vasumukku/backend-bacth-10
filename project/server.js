const cors = require('cors') 
const express=require("express")
const mongoose = require("mongoose") 
require("dotenv").config() //1 import
const app=express()
app.use(cors()) 

const port=process.env.port  //2 
// console.log(process.env)
app.use(express.json()) 

const {createacc,loginacc}=require("./controllers/user")

app.post("/signin",createacc) 
app.post("/login",loginacc)




const {createnotebook,getallnotes,updatenotebook,deletenotebooks}=require("./controllers/notebook")
app.post("/create",createnotebook)
app.get("/allnotes",getallnotes)
app.put("/update/:id",updatenotebook)
app.delete("/notes/delete/:id",deletenotebooks)


const{getallcartitems,createCart,clearCart,deleteitem}=require("./controllers/cart")
app.post("/addcart",createCart)
app.get("/cartitems",getallcartitems)
app.delete("/clearall",clearCart)
app.delete("/cart/delete/:id",deleteitem)


mongoose.connect(process.env.mongodb_uri)
.then(()=>{
  console.log("mongodb is connected")

  app.listen(port,()=>{
  console.log(`server is running port ${port}`)
})

})
.catch((e)=>{
  console.log("something went wrong: ",e.message)
})






app.get("/",(req,res)=>{
  res.send("<center> <h1> welcome to home page </h1></center>")
}) 
app.get("/",(req,res)=>{
  res.send("<center> <h1> welcome to home page </h1></center>")
})

app.get("/men",(req,res)=>{
  res.send("<center> <h1> welcome to mens page </h1></center>")
})


app.get("/women",(req,res)=>{
  res.send("<center> <h1> welcome to womens page </h1></center>")
})