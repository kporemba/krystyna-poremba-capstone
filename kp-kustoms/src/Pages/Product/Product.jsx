import "./Product.scss";
import ProductWindow from "../../Components/Product-Window/ProductWindow";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import React from "react";
import { ReactComponent as Heart } from "../../assets/icons/heart.svg";

function Product({ product: productProps }) {
  const [productState, setProductState] = useState(null);
  const [error, setError] = useState(null);
  const baseUrl = "http://localhost:8080/";
  const params = useParams();
  const product = productProps || productState; //use props if defined else use state

  const id = params.id;

  //listing one specific product
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id && !productProps) {
          const response = await axios.get(`${baseUrl}inventory/${id}`);
          setProductState(response.data);
        }
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  //adding item to wishlist
  function clickHandler(product) {
    const wishlistArr = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (!wishlistArr.includes(product.id)) {
      wishlistArr.push(product.id);
    }

    localStorage.setItem("wishlist", JSON.stringify(wishlistArr));
  }

  //adding item to the cart
  function cartHandler(product) {
    const wishlistArr = JSON.parse(localStorage.getItem("cart")) || [];

    if (!wishlistArr.includes(product.id)) {
      wishlistArr.push(product.id);
    }

    localStorage.setItem("cart", JSON.stringify(wishlistArr));
  }

  return (
    <div className="product">
      <div className="product__top">
        <div className="product__left">
          <div className="product__main">
            <img className="product__image" src={product.primary_image} />
          </div>
          <div className="product__side">
            <img className="product__side-image" src={product.second_image} />
            <img className="product__side-image" src={product.third_image} />
            <img className="product__side-image" src={product.fourth_image} />
          </div>
        </div>
        <div className="product__right">
          <h1 className="product__title">{product.product_name}</h1>
          <h3 className="product__subtitle">{product.price}</h3>
          <p className="product__description">{product.description}</p>
          <p className="product__description">
            All products are made to order.
          </p>
          <div className="product__buttons">
            <button
              className="product__button-cart"
              onClick={() => cartHandler(product)}
            >
              Add to cart
            </button>

            <button
              className="productWindow__button"
              onClick={() => clickHandler(product)}
            >
              <Heart className="productCard__button-heart" />
            </button>
          </div>
        </div>
      </div>
      {/* bottom of the page */}
      <div className="product__group">
        <h2 className="product__subtitle">{product.category}</h2>
        <ProductWindow category={product.category} />
      </div>
    </div>
  );
}

export default Product;