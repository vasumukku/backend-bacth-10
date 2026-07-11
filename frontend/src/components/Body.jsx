import React, { useEffect, useState } from "react";
import "./body.css";
import { Link } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";

const Body = () => {
  const [data, setData] = useState([]);

  // Get all books
  const allnotesfun = async () => {
    try {
      const allnotedata = await axios.get("http://localhost:5000/allnotes");
      console.log(allnotedata.data);
      setData(allnotedata.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  // Add to cart
  const addItemsInCart = async ({ imageid, name, author, price }) => {
    
    try {
      const response = await axios.post("http://localhost:5000/addcart", {
        imageid,
        name,
        author,
        price,
      });

      console.log(response.data);
      Swal.fire({title:"Added",text:`${response.data}`,icon:"Success"})
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    allnotesfun();
  }, []);

  return (
    <>
      <div className="logout-box">
        <div>
          <input
            type="text"
            placeholder="Enter your favourite book"
            className="searchbar"
          />

          <button className="createbutton-style">
            <Link to="/create">Create</Link>
            <span
              style={{
                color: "#fff",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              +
            </span>
          </button>

          <button className="cart-button-style">
            <Link to="/cart">Cart 🛒</Link>
          </button>

          <button className="logout-style">
            <Link to="/">Logout</Link>
          </button>
        </div>
      </div>

      <div style={{ textAlign: "center" }}>
        <h1>All Notebooks</h1>
      </div>

      <div className="card-container">
        {data.map((element, index) => (
          
          <div className="card" key={index}>
            <img
              src={element.imageid}
              alt="book"
              className="img-style-book"
            />

            <h4 style={{ color: "red", fontSize: "20px" }}>
              {element.name}
            </h4>

            <h3>
              Author :
              <span style={{ color: "green" }}>
                {element.author}
              </span>
            </h3>

            <div className="price-row-style">
              <p>
                <b>Price :</b> {element.price}
              </p>

              <button
                className="add-to-cart-style"
                onClick={() => addItemsInCart(element)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Body;