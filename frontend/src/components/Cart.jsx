import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Cart = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  // Get all cart items
  const allcartitems = async () => {
    try {
      const response = await axios.get("http://localhost:5000/cartitems");
      setData(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    allcartitems();
  }, []);

  // Delete Single Item
  const deleteitem = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/cart/delete/${id}`);

      Swal.fire({
        title: "Deleted!",
        text: "Item removed successfully",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });

      // Update UI without another GET request
      setData((prev) => prev.filter((item) => item._id !== id));
    } catch (error) {
      console.log(error.message);

      Swal.fire({
        title: "Error",
        text: "Unable to delete item",
        icon: "error",
      });
    }
  };

  // Total Amount
  const totalamount = data.reduce((total, item) => {
    if (!item.price.toLowerCase().includes("free")) {
      return total + Number(item.price.replace("₹", "").trim());
    }
    return total;
  }, 0);

  // Place Order
  const order = async () => {
    if (data.length === 0) {
      Swal.fire({
        title: "Cart Empty",
        text: "Please add items to cart.",
        icon: "warning",
      });
      return;
    }

    try {
      await axios.delete("http://localhost:5000/clearall");

      Swal.fire({
        title: "Order Successful 🎉",
        text: `Total Amount Paid : ₹${totalamount}`,
        icon: "success",
      });

      setData([]);

      navigate("/body");
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Something went wrong!",
        icon: "error",
      });
    }
  };

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
          gap: "20px",
        }}
      >
        {data.length === 0 ? (
          <h2>Your Cart is Empty 😔</h2>
        ) : (
          data.map((element) => (
            <div
              key={element._id}
              style={{
                backgroundColor: "#fff",
                width: "80%",
                padding: "20px",
                borderRadius: "15px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <img
                  src={element.imageid}
                  alt={element.name}
                  style={{
                    height: "150px",
                    width: "110px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />

                <div>
                  <h2>{element.name}</h2>
                  <h4>{element.author}</h4>
                </div>
              </div>

              <div style={{ textAlign: "center" }}>
                <h2 style={{ color: "green" }}>{element.price}</h2>

                <button
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "10px",
                    fontSize: "18px",
                    cursor: "pointer",
                  }}
                  onClick={() => deleteitem(element._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}

        <div
          style={{
            width: "80%",
            backgroundColor: "#2c3e50",
            color: "white",
            padding: "15px",
            borderRadius: "10px",
            textAlign: "right",
            marginBottom: "20px",
          }}
        >
          <h2>Total Amount : ₹ {totalamount}</h2>
        </div>
      </div>

      <div
        style={{
          textAlign: "right",
          marginRight: "150px",
          marginBottom: "30px",
        }}
      >
        <button
          onClick={order}
          style={{
            backgroundColor: "#F5CC27",
            padding: "18px 50px",
            fontSize: "20px",
            fontWeight: "bold",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Proceed to Checkout
        </button>
      </div>
    </>
  );
};

export default Cart;