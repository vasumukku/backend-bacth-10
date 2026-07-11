import React, { useState } from 'react'
import axios from "axios";
import { useEffect } from 'react';

const Cart = () => {

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

  useEffect(() => { allcartitems() }, [])

  let totalamount = 0

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
                  ₹ {element.price}
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

    </>
  )
}

export default Cart