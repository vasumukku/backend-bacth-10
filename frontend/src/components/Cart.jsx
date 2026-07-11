import React, { useState } from 'react'
import axios from "axios";
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Cart = () => {
  const navigate=useNavigate()
  const [data, setData] = useState([])

  const allcartitems = async () => {
    try {
      const allbook = await axios.get("http://localhost:5000/cartitems")
      console.log(allbook.data)
      setData(allbook.data)
    } catch (e) {
      console.log(e.message)
    }
  }

  let totalamount = 0
  const order=async () => {
       Swal.fire({
      title: " order Success!",
     text:`Total Amount of order ${totalamount}`,
      icon: "success",
    }); 
    navigate("/body")

  }

  useEffect(() => { allcartitems() }, [])


  return (
    <>

      <div style={{ textAlign: "center", margin: "30px 0" }}>
        <h1 style={{ color: "#2c3e50" }}>🛒 All Cart Items</h1>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px"
        }}
      >

        {data.map((element, index) => {
        if (element.price.toLowerCase() !== "₹freee") {
            totalamount =totalamount+ Number(
                element.price.replace("₹", "").trim()
            )
        }  
          return (

            <div
              key={index}
              style={{
                backgroundColor: "#ffffff",
                width: "80%",
                padding: "20px",
                borderRadius: "15px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                border: "1px solid #ddd"
              }}
            >

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px"
                }}
              >

                <div>
                  <img
                    src={element.imageid}
                    alt="book image"
                    style={{
                      height: "150px",
                      width: "110px",
                      objectFit: "cover",
                      borderRadius: "10px",
                      border: "2px solid #ddd"
                    }}
                  />
                </div>

                <div>
                  <h2
                    style={{
                      margin: "0",
                      color: "#2c3e50"
                    }}
                  >
                    {element.name}
                  </h2>

                  <h4
                    style={{
                      marginTop: "10px",
                      color: "#666",
                      fontWeight: "500"
                    }}
                  >
                    {element.author}
                  </h4>
                </div>

              </div>

              <div>
                <h2
                  style={{
                    color: "green",
                    fontWeight: "bold"
                  }}
                >
                   {element.price}
                </h2>
              </div>

            </div>

          )
        })}

        <div
          style={{
            width: "80%",
            backgroundColor: "#2c3e50",
            color: "white",
            padding: "15px",
            borderRadius: "10px",
            textAlign: "right",
            marginTop: "10px",
            marginBottom: "30px"
          }}
        >
          <h2>Total Amount : ₹ {totalamount}</h2>
        </div>


        

      </div>

      <div style={{textAlign:"right",marginRight:"150px"}}>
        <button  
        style={{backgroundColor:"#F5CC27",padding:"20px 60px",fontSize:"20px",
          fontWeight:"bold",border:"none",borderRadius:"10px"}}
          onClick={order}
        >Proceed to check out</button>
      </div>

    </>
  )
}

export default Cart