import React, { useState } from 'react'
import "./login.css"
import { Link } from 'react-router'
import Swal from "sweetalert2";
import axios from "axios"
import { useNavigate } from "react-router-dom";


const Login = () => {
  const[email,setEmail]=useState()
  const[password,setPassword]=useState()
  const navigate = useNavigate();

  const logincheck=async()=>{
   try {
    const response = await axios.post("http://localhost:5000/login",
      {email,password})

      console.log(response)

    Swal.fire({
  title: "Success!",
  text: `${response.data}  ❤️❤️❤️❤️❤️❤️`,
  icon: "success",
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
    <div className='main-container'>
      <div className='login-box'>
          <h1>Login page</h1>
          
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

          <button className='login-button-style'  onClick={logincheck}>
            
            login</button>
          <p className='para-style-dont-have-acc'> Don't have an account  

            <Link to="/signin" > sigin</Link>
          </p>

      </div>
    </div>
    </>

   
  )
}

export default Login
