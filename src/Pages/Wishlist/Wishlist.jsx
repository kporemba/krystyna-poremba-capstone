import "./Wishlist.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import CustomBanner from "../../Components/Custom-Banner/CustomBanner";

function Wishlist(props) {
  const [wishlistArr, setWishlistArr] = useState([]);
  const [productState, setProductState] = useState(null);
  const [error, setError] = useState(null);
  const baseUrl = process.env.baseUrl || "http://localhost:8080";

  //calling wishlist string from local storage
  useEffect(() => {
    const productStr = localStorage.getItem("wishlist");
    const productId = JSON.parse(productStr);
    setWishlistArr(productId);
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
  }, [baseUrl]);

  //remove product from wishlist
  function removeHandler(id) {
    const products = localStorage.getItem("wishlist");
    const productsId = JSON.parse(products);
    const newProducts = productsId.filter((product) => product !== id);

    localStorage.setItem("wishlist", JSON.stringify(newProducts));
    setWishlistArr(newProducts);
  }

  if (!productState) {
    return null;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  //adding item to the cart
  function cartHandler(product) {
    const cartArr = JSON.parse(localStorage.getItem("cart")) || [];

    if (!cartArr.includes(product.id)) {
      cartArr.push(product.id);
    }

    props.updateCartTotal(1);
    localStorage.setItem("cart", JSON.stringify(cartArr));
  }

  return (
    <div className="wishlist">
      <h1 className="wishlist__title">Your Wishlist</h1>
      <div className="wishlist__group">
        {productState
          .filter((product) => wishlistArr.includes(product.id)) //filtering all products to only include those with the ID in wishlist
          .map((product) => (
            <div className="wishlist__group-card">
              <Link to={`/Shop/${product.id}`} className="productWindow__link">
                <ProductCard product={product} />
              </Link>
              <div className="wishlist__buttons">
                <button
                  className="wishlist__cart"
                  onClick={() => cartHandler(product)}
                >
                  Add to cart
                </button>
                <button
                  className="wishlist__remove"
                  onClick={() => removeHandler(product.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
      </div>
      <CustomBanner />
    </div>
  );
}

export default Wishlist;
