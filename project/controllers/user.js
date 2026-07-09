const User =require("../model/user")
const bcrypt = require("bcrypt")  //1

const createacc=async (req,res) => {
 try {
  const {name,email,password}=req.body
  const hashpassword = await bcrypt.hash(password, 10); //2
    const response=await User.create({name,email,password:hashpassword})

  res.json({
    message:`Account created successfullly ${response.name}`,
    userdata:response,
   
  })

 } catch (e) {
      res.status(401).send(e.message) 

 }
}

const loginacc=async (req,res) => {
  try {
    const {email,password}=req.body
    const usercheck =await User.findOne({email})
    if(!usercheck){
      throw new Error("Email is not found");
      
    }
                                            //$2b$12$OOfTA0rRu6s6dj73JjksGuHJNvG0v0.F0OP2ZbInJYBh/AZ3WSc8e" ,$2b$12$OOfTA0rRu6s6dj73JjksGuHJNvG0v0.F0OP2ZbInJYBh/AZ3WSc8e"
    const passwordcheck=await bcrypt.compare(password,usercheck.password)
    if(!passwordcheck){
      throw new Error("passwor is invalid ");
      
    }
    res.send("successfullly login ")
    
  } catch (e) {
    res.status(401).send(e.message)
  }
}





module.exports={createacc,loginacc}



//1.import model 
//2. write logic of create acc 
//3.export function 