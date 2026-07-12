import React, { useEffect, useState } from "react";
import "./body.css";
import { Link } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";

const Body = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

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

      Swal.fire({
        title: "Added",
        text: response.data,
        icon: "success",
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  // Filter books
  const filteredBooks = data.filter((book) => {
    return (
      book.name.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase()) ||
      book.price.toLowerCase().includes(search.toLowerCase())
    );
  });

  useEffect(() => {
    allnotesfun();
  }, []);

  return (
    <>
      <div className="logout-box">
        <div>
          <input
            type="text"
            placeholder="Search by Name, Author or Price"
            className="searchbar"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
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
        {filteredBooks.length > 0 ? 
        (
          filteredBooks.map((element, index) => (
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
                <span style={{ color: "green" }}>{element.author}</span>
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
          ))
        ) : 
        (
          <h2 style={{ textAlign: "center", color: "red", width: "100%" }}>
            No Books Found 📚
          </h2>
        )}
      </div>
    </>
  );
};

export default Body;