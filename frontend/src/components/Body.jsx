import React from 'react'
import "./body.css"
import { Link } from 'react-router'

const Body = () => {
  return (
    <>
    <div className="logout-box">
      <div >
        <input type="text" placeholder='enter your fav book name' className='searchbar' />
      <button className='logout-style'>
        <Link to="/" >logout</Link>
        </button> 
      </div>
    </div>

    <div style={{textAlign:"center"}}>
      <h1>All Notebooks </h1>
    </div>
    </>
  )
}

export default Body
