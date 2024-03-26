import "./Product.scss";
import ProductWindow from "../../Components/Product-Window/ProductWindow";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import React from "react";
// import heart from "../../assets/icons/heart.svg";
// import { ReactComponent as Instagram } from "../../assets/icons/instagram.svg";
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

  return (
    <div className="product">
      <div className="product__container">
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
            <button className="product__button-cart">Add to cart</button>

            <Heart className="product__button-heart" />
          </div>
        </div>
      </div>
      <div className="product__group">
        <h2 className="product__subtitle">{product.category}</h2>
        <ProductWindow category={product.category} />
      </div>
    </div>
  );
}

export default Product;
