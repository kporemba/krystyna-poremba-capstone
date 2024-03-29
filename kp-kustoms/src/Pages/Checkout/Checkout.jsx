// "use client";
// import { CreditCard, PaymentForm } from "react-square-web-payments-sdk";
// import { submitPayment } from "../../actions/actions";

// export default function Checkout() {
//   const appId = "sandbox-sq0idb-pqymT5z-zL4jVZK919sxMw";
//   const locationId = "LW3MNVHRSAPBB";

//   return (
//     <PaymentForm
//       applicationId={appId}
//       locationId={locationId}
//       cardTokenizeResponseReceived={async (token) => {
//         const result = await submitPayment(token.token);
//         console.log(result);
//       }}
//     >
//       <CreditCard />
//     </PaymentForm>
//   );
// }
