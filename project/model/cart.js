const mongoose=require("mongoose")

const cartSchema=new mongoose.Schema(
  {
    imageid:{
      type:String,
      required:true
    },
    name:{
      type:String,
      required:true
    },
    author:{
      type:String,
      required:true
    },
    price:{
      type:String,
      required:true
    }

  }
) 


module.exports=mongoose.model("cart",cartSchema)