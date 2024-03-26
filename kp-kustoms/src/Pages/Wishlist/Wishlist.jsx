import "./Wishlist.scss";
import WishlistProductCard from "../../Components/WishlistProductCard/WishlistProductCard";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import React from "react";

function Wishlist({ product: productProps }) {
  const wishlistArr = localStorage.getItem("product");
  const productId = JSON.parse(wishlistArr);

  const [productState, setProductState] = useState(null);
  const [error, setError] = useState(null);
  const baseUrl = "http://localhost:8080/";
  //   const params = useParams();
  //   const product = productProps || productState; //use props if defined else use state

  //listing one specific product
  useEffect(() => {
    const fetchData = async () => {
      try {
        // if (productId && !productProps) {
        const response = await axios.get(`${baseUrl}inventory`);
        setProductState(response.data);
        // }
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  console.log(productState);
  console.log(productId);
  function removeHandler() {
    localStorage.removeItem(productId);
  }

  return (
    <div className="wishlist">
      <h1 className="wishlist__title">My Wishlist</h1>
      <div className="wishlist__group">
        {productState
          .filter((productState) => productState.id === productState.productId)
          .map((productState) => (
            <div className="wishlist__group2">
              <Link to={`/Shop/${productId}`} className="productWindow__link">
                <WishlistProductCard product={productState} />
              </Link>
              <div className="wishlist__buttons">
                <button className="wishlist__cart">Add to cart</button>
                <button
                  className="wishlist__remove"
                  onClick={() => removeHandler(productState)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Wishlist;
