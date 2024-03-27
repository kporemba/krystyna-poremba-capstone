"use client";
import { CreditCard, PaymentForm } from "react-square-web-payments-sdk";

export default function Checkout() {
  const appId = "sandbox-sq0idb-pqymT5z-zL4jVZK919sxMw";
  const locationId = "LW3MNVHRSAPBB";

  return (
    <PaymentForm
      applicationId={appId}
      locationId={locationId}
      cardTokenizeResponseReceived={async (token) => {
        // we’ll come back to this soon
        console.log(token);
      }}
    >
      <CreditCard />
    </PaymentForm>
  );
}
