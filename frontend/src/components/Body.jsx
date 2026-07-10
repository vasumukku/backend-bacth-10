import React, { useEffect, useState } from 'react'
import "./body.css"
import { Link } from 'react-router'
import axios from "axios"


const Body = () => {
  const[data,setData]=useState([])
    const allnotesfun=async() => {
      try {
        const allnotedata=await axios.get("http://localhost:5000/allnotes")
        console.log(allnotedata)
        setData(allnotedata.data)
      } catch (e) {
        console.log(e.message)
      }
    }

  useEffect(()=>{
    allnotesfun()
  },[])

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


    <div className='card-container'>

     {
  data.map((element, index) => {
    return (
      <div className="card" key={index}>
        <img
          src={element.imageid}
          alt="book img"
          className="img-style-book"
        />

        <h4 style={{color:"red",fontSize:"20px"}}>{element.name}</h4>
        <h3 > Author :<span style={{color:"green"}}>{element.author}</span></h3>
        <div className='price-row-style'>
           <p> <b>price :</b>{element.price}</p>
           <button className='add-to-cart-style'>Add to cart</button>
        </div>
       
      </div>
    );
  })
}
        
    </div>
    </>
  )
}

export default Body
