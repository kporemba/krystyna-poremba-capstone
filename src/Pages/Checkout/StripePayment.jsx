import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

//stripe test key
const stripePromise = loadStripe(
  "pk_test_51OzpmUDTuB4jIPUCBNrr8hZtMtwqOM5ywkvGs7QfU1ngdEcqrBO3EgmYAyAnv2Vd25RrfBtxhvpPbmvCjJmMYjzv00ExM1aTGR"
);

export default function StripeCheckout() {
  const [clientSecret, setClientSecret] = useState("");
  const baseUrl = process.env.baseUrl || "http://localhost:8080";

  //api call to get payment details
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
      .catch((error) => {
        console.log(error);
      });
  }, [baseUrl]);

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
