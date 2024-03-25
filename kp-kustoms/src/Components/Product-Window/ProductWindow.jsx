import "./ProductWindow.scss";
import ProductCard from "../ProductCard/ProductCard";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const ProductWindow = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [error, setError] = useState(null);
  const baseUrl = "http://localhost:8080/";

  const categoryArr = [
    "Cardigans",
    "Hats",
    "Blankets",
    "Sweaters",
    "Accessories",
    "Bags",
    "Knit",
  ];

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
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!products) {
    return <div>Loading...</div>;
  }

  if (category === "Cardigan") {
    return (
      <div className="productWindow">
        {products.slice(14, 16).map((product) => (
          <div className="productWindow__container">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="productWindow">
      {products.slice(0, 6).map((product) => (
        <div className="productWindow__container">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductWindow;
