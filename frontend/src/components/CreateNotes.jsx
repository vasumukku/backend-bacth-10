import React, { useState } from 'react'
import "./create.css"
import Swal from "sweetalert2";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const CreateNotes = () => {
  const[imageid,setImageid]=useState()
  const[name,setName]=useState()
  const[author,setAuthor]=useState()
  const[price,setPrice]=useState() 
  const navigate=useNavigate()

  const addbook=async () => {
    try {
      
      const response=await axios.post("http://localhost:5000/create",

        {imageid,name,author,price}
      )

      console.log(response)

       Swal.fire({
        title: "Book added",
        text: `${response.data}`,
        icon: "Success",
      });

      navigate("/body")
    } catch (e) {
       Swal.fire({
        title: "Error something...",
        text: e.message,
        icon: "Error",
      });
    }
  }
  return (
   <>
   <div className='book-creation-main-container'>
    <h1 style={{fontSize:"50px",textDecoration:"underline"}}> Create Book</h1>

        <div>
          <label htmlFor="">Image Id :</label>
          <br />
          <input type="text" placeholder='enter your book image'
            onChange={(e)=>{setImageid(e.target.value)}}
          />
          <br /><br />
          <label htmlFor="">Book Name:</label> <br />
          <input type="text" name="" id="" placeholder='enter your book name' 
        onChange={(e)=>{setName(e.target.value)}}

          />
          <br /><br />
          <label htmlFor=""> Author:</label>
          <br />
          <input type="text" placeholder='enter author name' 
              onChange={(e)=>{setAuthor(e.target.value)}}

          />
          <br /><br />
          <label htmlFor="">Price:</label> <br />
          <input type="text"  placeholder='enter your book price'
              onChange={(e)=>{setPrice(e.target.value)}}

          />
          <br /><br /><br />
          <button 
          style={{backgroundColor:"green", padding:"10px 80px",border:"none",
          borderRadius:"10px",fontSize:"20px",fontWeight:"bold"}}   
          onClick={addbook}
          >Add</button>
        </div>
   </div>
   </>
  )
}

export default CreateNotes
