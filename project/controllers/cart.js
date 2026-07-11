const Cart=require("../model/cart")

const createCart=async (req,res) => {
  try {
    const{imageid,name,author,price}=req.body
    const response=await Cart.create({imageid,name,author,price})
    res.send("added")
  } catch (e) {
    res.status(401).send(e.message)
  }
}

const getallcartitems=async (req,res) => {
  try {
    const allnotebooks=await Cart.find()
    res.send(allnotebooks)
  } catch (e) {
    res.status(401).send(e.message)
  }
}


module.exports={createCart,getallcartitems}