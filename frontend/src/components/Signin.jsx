import React from 'react'
import "./login.css"
import { Link } from 'react-router'

{/* <Link to="/sigin" >signin</Link> */}
const Signin = () => {
  return (
    <>
    <div className='main-container'>
      <div className='login-box'>
          <h1>Login page</h1>
          <label htmlFor="">username:</label>
          <input type="text" name="" id=""  placeholder='enter your name'/>
          <br /><br />
          <label htmlFor="">Email:</label>
          <input type="email" name="" id=""  placeholder='enter you email'/>
    <br /><br />
          <label htmlFor="">Password:</label>
          <input type="password" name="" id=""  placeholder='enter you email'/>

          <br /><br />

          <button className='login-button-style'>signin</button>
          <p className='para-style-dont-have-acc'> Don't have an account  

            <Link to="/" > login</Link>
          </p>

      </div>
    </div>
    </>

   
  )
}

export default Signin
