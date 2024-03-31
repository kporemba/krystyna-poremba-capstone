import "./Cart.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

function Cart() {
  const [cartArr, setCartArr] = useState([]);
  const [productState, setProductState] = useState(null);
  const [error, setError] = useState(null);
  const baseUrl = "http://localhost:8080/";
  const [totalPrice, setTotalPrice] = useState(0);

  const [number, setNumber] = useState({});

  //calling cart string from local storage
  useEffect(() => {
    const productStr = localStorage.getItem("cart");
    const productId = JSON.parse(productStr);
    setCartArr(productId);
    const productMap = {};
    productId.forEach((product) => {
      productMap[product] = 1;
    });
    setNumber(productMap);
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

  //grand total
  useEffect(() => {
    const price = 0;

    const newPrice = productState
      ?.filter((product) => cartArr.includes(product.id))
      .reduce((acc, curr) => acc + curr.price * number[curr.id], price);
    setTotalPrice(newPrice);

    localStorage.setItem("productTotalValue", JSON.stringify(newPrice));
  }, [cartArr, number, productState]);

  //remove product from wishlist
  function removeHandler(id) {
    const products = localStorage.getItem("cart");
    const productsId = JSON.parse(products);
    const newProducts = productsId.filter((product) => product !== id);

    localStorage.setItem("cart", JSON.stringify(newProducts));
    setCartArr(newProducts);
  }

  if (!productState) {
    return null;
  }

  if (error) {
    return error;
  }

  //quantity button
  const updateQuantity = (id, value) => {
    if (number[id] === 1 && value === -1) {
      return;
    }
    setNumber({ ...number, [id]: number[id] + value });
  };

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
              <td className="cart__text--first">
                {product.product_name}
                <button
                  className="cart__remove"
                  onClick={() => removeHandler(product.id)}
                >
                  Remove
                </button>
              </td>
              <td className="cart__text">{product.price}</td>
              <td className="cart__text">
                <div className="cart__counter">
                  <button
                    className="cart__counter-button"
                    onClick={() => updateQuantity(product.id, -1)}
                    disabled={number[product.id] === 1}
                  >
                    -
                  </button>
                  <p className="cart__counter-text">{number[product.id]}</p>
                  <button
                    className="cart__counter-button"
                    onClick={() => updateQuantity(product.id, 1)}
                  >
                    +
                  </button>
                </div>
              </td>

              <td className="cart__text">
                {(product.price * number[product.id]).toFixed(2)}
              </td>
            </tr>
          ))}
        <tr className="cart__subtitle-footer">
          <th className="cart__subtitle--first"></th>
          <th className="cart__subtitle"></th>
          <th className="cart__subtitle">Total:</th>
          <th className="cart__subtitle">{totalPrice?.toFixed(2)}</th>
        </tr>
      </table>
      <div className="cart__checkout-box">
        <Link to="/Checkout" className="cart__checkout-link">
          <button className="cart__checkout">Procceed to checkout</button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
