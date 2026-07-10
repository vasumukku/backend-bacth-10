import React, { useState } from 'react'
import "./login.css"
import { Link } from 'react-router'
import Swal from "sweetalert2";
import axios from "axios"
import { useNavigate } from "react-router-dom";


{/* <Link to="/sigin" >signin</Link> */}
const Signin = () => {
  const[name,setName]=useState()
  const[email,setEmail]=useState()
  const[password,setPassword]=useState() 
  const navigate = useNavigate();
  

  const createacc = async () => {
    try {

      const response=await axios.post("http://localhost:5000/signin",
        {name,email,password}
      )

      console.log(response)

         Swal.fire({
        title: "Success!",
        text: `${response.data.message}  ❤️❤️❤️❤️❤️❤️`,
        icon: "success",
      }); 

      navigate("/")
      
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
    <div className='main-container'>
      <div className='login-box'>
          <h1>Login page</h1>
          <label htmlFor="">username:</label>
          <input type="text" name="" id=""  placeholder='enter your name'
          onChange={(e)=>{
            setName(e.target.value)
          }}
          />
          <br /><br />
          <label htmlFor="">Email:</label>
          <input type="email" name="" id=""  placeholder='enter you email'
          
           onChange={(e)=>{
           
            setEmail(e.target.value)
          }}
          />
    <br /><br />
          <label htmlFor="">Password:</label>
          <input type="password" name="" id=""  placeholder='enter you email'
           onChange={(e)=>{
           
            setPassword(e.target.value)
          }}
          
          />

          <br /><br />

          <button className='login-button-style' onClick={createacc}>signin</button>
          <p className='para-style-dont-have-acc'> Don't have an account  

            <Link to="/" > login</Link>
          </p>

      </div>
    </div>
    </>

   
  )
}

export default Signin
