import "./WishlistProductCard.scss";
import React from "react";

const WishlistProductCard = ({ productState }) => {
  return (
    <div className="wishlistProductCard">
      <img
        className="wishlistProductCard__image"
        src={productState?.primary_image}
      />
      <h3 className="wishlistProductCard__name">
        {productState?.product_name}
      </h3>
      <div className="wishlistProductCard__group">
        <h4 className="wishlistProductCard__price">{productState?.price}</h4>
      </div>
    </div>
  );
};

export default WishlistProductCard;
