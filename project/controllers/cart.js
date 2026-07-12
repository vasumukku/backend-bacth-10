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

const clearCart=async (req,res) => {
  try {
    const deleteall=await Cart.deleteMany({})
    res.send("successfully cleared cart items")
  } catch (e) {
    res.status(401).send(e.message)
  }
}


const deleteitem = async (req,res) => {
  try {
      const id =req.params.id
      const response = await Cart.findByIdAndDelete({_id:id})
      if(!response){
        throw new Error("notebook not found 💔");
        
      } 

      res.send("item deleted 🚨") 

  } catch (e) {
    res.status(401).send(e.message) 
  }  
}

module.exports={createCart,getallcartitems,clearCart,deleteitem}