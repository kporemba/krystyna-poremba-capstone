import "./Cart.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";

function Cart() {
  const [cartArr, setCartArr] = useState([]);
  const [productState, setProductState] = useState(null);
  const [error, setError] = useState(null);
  const baseUrl = "http://localhost:8080/";

  //calling cart string from local storage
  useEffect(() => {
    const productStr = localStorage.getItem("cart");
    const productId = JSON.parse(productStr);
    setCartArr(productId);
  }, []);

  //listing all products
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}inventory`);
        setProductState(response.data);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  if (!productState) {
    return null;
  }

  if (error) {
    return error;
  }

  return (
    <div className="cart">
      <h1 className="cart__title">Your Cart</h1>
      <table className="cart__table">
        <tr className="cart__subtitle-header">
          <th className="cart__subtitle--first">Product</th>
          <th className="cart__subtitle">Price</th>
          <th className="cart__subtitle">Quantity</th>
          <th className="cart__subtitle">Total</th>
        </tr>

        {productState
          .filter((product) => cartArr.includes(product.id))
          .map((product) => (
            <tr className="cart__text-header" key={product.id}>
              {/* <td className="cart__text--image">{product.primary_image} </td> */}
              <td className="cart__text--first">{product.product_name}</td>
              <td className="cart__text">{product.price}</td>
              <td className="cart__text">1</td>
              <td className="cart__text">{product.price}</td>
            </tr>
          ))}
      </table>
    </div>
  );
}

export default Cart;
