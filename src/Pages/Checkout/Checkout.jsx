import React from "react";
import StripeCheckout from "./StripePayment";
import "./Checkout.scss";

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout__container">
        <StripeCheckout />
      </div>
    </div>
  );
};

export default Checkout;
