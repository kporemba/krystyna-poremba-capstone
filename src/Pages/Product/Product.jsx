import "./Product.scss";
import ProductWindow from "../../Components/Product-Window/ProductWindow";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import React from "react";
import { ReactComponent as Heart } from "../../assets/icons/heart.svg";
import { ReactComponent as BackArrow } from "../../assets/icons/back.svg";
import { Link } from "react-router-dom";

function Product({ product: productProps, updateCartTotal }) {
  const [productState, setProductState] = useState(null);
  const [error, setError] = useState(null);
  const baseUrl = process.env.baseUrl || "http://localhost:8080";
  const params = useParams();
  const id = params.id;
  const product = productProps || productState; //use props if defined else use state
  const [productImages, setProductImages] = useState([
    product?.primary_image,
    product?.second_image,
    product?.third_image,
    product?.fourth_image,
  ]);

  const [mainImage, setMainImage] = useState(productImages[0]);

  //listing one specific product
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id && !productProps) {
          const response = await axios.get(`${baseUrl}inventory/${id}`);
          setProductState(response.data);
          setProductImages([
            response.data.primary_image,
            response.data.second_image,
            response.data.third_image,
            response.data.fourth_image,
          ]);
          setMainImage(response.data.primary_image);
        }
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [id, productProps, baseUrl]);

  if (!product) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
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
    const cartArr = JSON.parse(localStorage.getItem("cart")) || [];

    if (!cartArr.includes(product.id)) {
      cartArr.push(product.id);
    }

    updateCartTotal(1);
    localStorage.setItem("cart", JSON.stringify(cartArr));
  }

  //image toggle
  const toggleImage = (productImage) => {
    setMainImage(productImage);
  };

  return (
    <div className="product">
      <Link to="/Shop" className="product__back">
        <button className="product__back-button">
          <BackArrow className="product__back-arrow" alt="back arrow" />
          Back to all products
        </button>
      </Link>
      <div className="product__top">
        <div className="product__left">
          <div className="product__main">
            <img className="product__image" src={mainImage} alt="The product" />
          </div>
          <div className="product__side">
            {productImages
              .filter((image) => image !== mainImage)
              .map((image) => (
                <img
                  className="product__side-image"
                  src={image}
                  alt="The product"
                  onClick={() => toggleImage(image)}
                />
              ))}
          </div>
        </div>
        <div className="product__right">
          <h1 className="product__title">{product.product_name}</h1>
          <h3 className="product__subtitle">${product.price}</h3>
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
              className="product__button-heart"
              onClick={() => clickHandler(product)}
            >
              <Heart className="product__button-heart" />
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
