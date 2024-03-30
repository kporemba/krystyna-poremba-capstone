import "./Cart.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";

function Cart() {
  const [cartArr, setCartArr] = useState([]);
  const [productState, setProductState] = useState(null);
  const [quantityTotal, setQuantityTotal] = useState(); //total price of a specific product
  const [error, setError] = useState(null);
  const baseUrl = "http://localhost:8080/";

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
                {product.price * number[product.id]}
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
}

export default Cart;
