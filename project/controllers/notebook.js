const Notes =require("../model/notebook.js")

//create
//getnotebooks
//updatenotebooks
//deletenotebooks

const createnotebook=async (req,res) => {
  try {
    const{imageid,name,author,price}=req.body
    const response=await Notes.create({imageid,name,author,price})
    res.send("notebook created successfullly ❤️❤️")
  } catch (e) {
    res.status(401).send(e.message)
  }
}

const getallnotes=async (req,res) => {
  try {
    const allnotebooks=await Notes.find()
    res.send(allnotebooks)
  } catch (e) {
    res.status(401).send(e.message)
  }
}

const updatenotebook =async (req,res) => {
  
  try {
    const {imageid,name,author,price}=req.body
    const id = req.params.id
  const response=await Notes.findByIdAndUpdate({_id: id },{imageid,name,author,price},{new:true})
  res.send(response) 

  } catch (e) {
    res.status(401).send(e.message)
  }
}


const deletenotebooks = async (req,res) => {
  try {
      const id =req.params.id
      const response = await Notes.findByIdAndDelete({_id:id})
      if(!response){
        throw new Error("notebook not found 💔");
        
      } 

      res.send("notebook successfullly deleted 🚨") 

  } catch (e) {
    res.status(401).send(e.message) 
  }  
}

module.exports={createnotebook,getallnotes,updatenotebook,deletenotebooks} 