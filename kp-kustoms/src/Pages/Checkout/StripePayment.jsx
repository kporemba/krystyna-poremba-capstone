import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_live_51OzpmUDTuB4jIPUCYotthRcSTG2qcRI0nDbJnMWYGivgG0qagTXMCgGB5ZwDQTjFjSZvuPu9zd2yZsX86MkG4GJ500DkVlnosa"
);

export default function StripeCheckout() {
  const [clientSecret, setClientSecret] = useState("");
  const baseUrl = "http://localhost:8080/";

  useEffect(() => {
    const amount = JSON.parse(localStorage.getItem("productTotalValue"));

    fetch(`${baseUrl}create-payment-intent`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: amount }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => setClientSecret(data.clientSecret))
      .then(() => {
        console.log(clientSecret);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const options = {
    clientSecret,
  };

  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}
