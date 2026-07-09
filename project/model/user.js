const mongoose=require("mongoose")
const validator=require("validator") 
const userSchema=new mongoose.Schema(
  {
    name:{
      type:String,
      required:true
    },
    email:{
      type:String,
      required:true,
      unique:true,
      validate(value){
        if(!validator.isEmail(value)){
          throw new Error("Email is not valid")
        }
      }

    },
    password:{
      type:String,
      required:true,
      validate(value){
        if(!validator.isStrongPassword(value)){
          throw new Error("Password is weak");
          
        }

      }
    }
  }
)


module.exports=mongoose.model("User",userSchema)



//1.imoort mongooose
//2.install validator
//3.import validator
//4.create schema
//export model --module.export = mongoose.model(tbn,plan)