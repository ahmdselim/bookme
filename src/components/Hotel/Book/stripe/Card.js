import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Checkout } from "./Checkout";
const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);

const Card = () => {
  return (
    <div className="hotelC">
      {/* <Elements stripe={stripePromise}>
      <Checkout/>
        ahmed
      </Elements> */}
      ahmed
    </div>
  );
};

export default Card;
