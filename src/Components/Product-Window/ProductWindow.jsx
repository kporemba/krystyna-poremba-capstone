import "./ProductWindow.scss";
import ProductCard from "../ProductCard/ProductCard";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Heart } from "../../assets/icons/heart.svg";

const ProductWindow = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const baseUrl = process.env.baseUrl || "http://localhost:8080/";

  //listing all products
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}inventory`);
        setProducts(response.data);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [baseUrl]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!products) {
    return <div>Loading...</div>;
  }

  //adding items to wishlist
  function clickHandler(product) {
    const wishlistArr = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (!wishlistArr.includes(product.id)) {
      wishlistArr.push(product.id);
    }

    localStorage.setItem("wishlist", JSON.stringify(wishlistArr));
  }

  return (
    <div className="productWindow">
      {products
        .filter((product) => product.category === category)
        .map((product) => (
          <div className="productWindow__container">
            <button
              className="productWindow__button"
              onClick={() => clickHandler(product)}
            ></button>
            <Link to={`/Shop/${product.id}`} className="productWindow__link">
              <ProductCard product={product} />
            </Link>
            <button
              className="product__button-heart"
              onClick={() => clickHandler(product)}
            >
              <Heart className="productWindow__button-heart" />
            </button>
          </div>
        ))}
    </div>
  );
};

export default ProductWindow;
