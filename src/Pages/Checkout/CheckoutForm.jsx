import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import "./CheckoutForm.scss";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [cartArr, setCartArr] = useState([]);
  const [productState, setProductState] = useState([]);
  const [error, setError] = useState(null);
  const baseUrl = "http://localhost:8080/";
  const [totalPrice, setTotalPrice] = useState(0);

  const [number, setNumber] = useState({});

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      setMessage(
        paymentIntent.status === "succeeded"
          ? "Your payment succeeded"
          : "Unexpected error occurred"
      );
    });
  }, [stripe]);

  //submit handler that redirects on payment success
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/Hooray",
      },
    });

    if (
      error &&
      (error.type === "card_error" || error.type === "validation_error")
    ) {
      setMessage(error.message);
    }

    setIsLoading(false);
  };

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
  }, []);

  //calling total price from local storage
  useEffect(() => {
    const total = localStorage.getItem("productTotalValue");
    const totalP = JSON.parse(total);
    setTotalPrice(totalP);
  }, []);

  //calling cart string from local storage
  useEffect(() => {
    const productStr = localStorage.getItem("cart");
    const productId = JSON.parse(productStr);
    setCartArr(productId);
    const productMap = {};
    productId.forEach((product) => {
      productMap[product] = 1;
    });
    setNumber(productMap);
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <p className="checkoutForm">Complete your payment to KP Kustoms</p>
      <p className="checkoutForm__subtitle">Your cart: </p>
      <div>
        {productState
          .filter((product) => cartArr.includes(product.id))
          .map((product) => (
            <div className="checkoutForm__group">
              <p className="checkoutForm__text">{product.product_name}:</p>
              <p className="checkoutForm__data">${product.price}</p>
            </div>
          ))}
      </div>
      <p className="checkoutForm__text checkoutForm__text--total">
        Total: ${totalPrice?.toFixed(2)}
      </p>
      <PaymentElement />
      <button
        className="checkoutForm__button"
        disabled={isLoading || !stripe || !elements}
      >
        {isLoading ? "Loading..." : "Pay now"}
      </button>
      {message && <div>{message}</div>}
    </form>
  );
}
