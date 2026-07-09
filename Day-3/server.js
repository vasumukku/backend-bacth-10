//step-1 install package.json--npm init -y
//step-2 express install 
const express=require("express")
const { useCallback } = require("react")
const app=express()
const port = 5000
app.listen(port,()=>{
  console.log(`server is running port number ${port}`)
})


// server.method(Path,Callback) 
app.get("/men",()=>{
  res.send("successfullly call men api")
})