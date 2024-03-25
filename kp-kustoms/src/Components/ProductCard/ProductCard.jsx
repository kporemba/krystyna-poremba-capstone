import "./ProductCard.scss";
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="productCard">
      <img className="productCard__image" src={product?.primary_image} />
      <h3 className="productCard__name">{product?.product_name}</h3>
      <h4 className="productCard__price">{product?.price}</h4>
    </div>
  );
};

export default ProductCard;
