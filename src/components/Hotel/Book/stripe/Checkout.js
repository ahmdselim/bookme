import React, { useState } from "react";
import {
  CardElement,
  useElements,
  useStripe,
  PaymentElement,
} from "@stripe/react-stripe-js";
// import StatusMessages, { useMessages } from "./StatusMessages";
import axios from "axios";

export const Checkout = () => {
  const element = useElements();
  const stripe = useStripe();
  const [success, setSuccess] = useState(false);
  const [checkoutError, setCheckoutError] = useState();
  const [isProcessing, setProcessingTo] = useState(false);
  const [isPaymentLoading, setPaymentLoading] = useState(false);

  const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
      base: {
        iconColor: "#c4f0ff",
        color: "#fff",
        fontWeight: 500,
        fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
        fontSize: "16px",
        fontSmoothing: "antialiased",
        ":-webkit-autofill": { color: "#fce883" },
        "::placeholder": { color: "#87bbfd" },
      },
      invalid: {
        iconColor: "#ffc7ee",
        color: "#ffc7ee",
      },
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cardElement = element.getElement(CardElement);
    console.log("card : ", cardElement);
    console.log("stripe : ", stripe);
    if (!element || !stripe) {
      return;
    }

    const clientSecret = async (req, res) => {
      if (req.method === "POST") {
        try {
          const { amount } = req.body;
          console.log(amount);

          // const paymentIntent = await stripe.paymentIntents.create({
          //   amount,
          //   currency: "usd",
          // });

          // res.status(200).send(paymentIntent.client_secret);
        } catch (err) {
          // res.status(500).json({ statusCode: 500, message: err.message });
        }
      } else {
        // res.setHeader("Allow", "POST");
        // res.status(405).end("Method Not Allowed");
      }
    };
    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: element.getElement(CardElement),
        billing_details: {
          name: "Yusen Faure",
        },
      },
    });
    setPaymentLoading(false);
    if (paymentResult.error) {
      alert(paymentResult.error.message);
      console.log(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Success!");
        console.log(paymentResult);
      }
    }

    // try {
    // const { data: clientSecret } = await axios.post("/api/payment_intents", {
    //   amount: 12 * 100,
    // });
    // console.log(clientSecret);

    //   const paymentMethodReq = await stripe.createPaymentMethod({
    //     type: "card",
    //     card: cardElement,
    //     // billing_details: billingDetails,
    //   });

    //   if (paymentMethodReq.error) {
    //     setCheckoutError(paymentMethodReq.error.message);
    //     setProcessingTo(false);
    //     return;
    //   }

    //   const { error } = await stripe.confirmCardPayment(clientSecret, {
    //     payment_method: paymentMethodReq.paymentMethod.id,
    //   });

    //   if (error) {
    //     setCheckoutError(error.message);
    //     setProcessingTo(false);
    //     return;
    //   }

    //   //   onSuccessfulCheckout();
    // } catch (err) {
    //   setCheckoutError(err.message);
    // }

    // const { error, paymentMethod } = await stripe.createPaymentMethod({
    //   type: "card",
    //   card: element.getElement(CardElement),
    // });
    // if (!error) {
    //   try {
    //     const { id } = paymentMethod;
    //     const response = await axios.post("http://localhost:4000/payment", {
    //       amount: 1000,
    //       id,
    //     });

    //     if (response.data.success) {
    //       console.log("Successful payment");
    //       setSuccess(true);
    //     }
    //   } catch (error) {
    //     console.log("Error", error);
    //   }
    // } else {
    //   console.log(error.message);
    // }
  };
  return (
    <div className="checkout">
      <div class="product-info">
        <h3 className="product-title">Apple MacBook Pro</h3>
        <h4 className="product-price">$999</h4>
      </div>

      <form onSubmit={handleSubmit}>
        <fieldset className="FormGroup">
          <div className="FormRow">
            <CardElement options={CARD_OPTIONS} />
          </div>
        </fieldset>
        <button disabled={isPaymentLoading}>
          {isPaymentLoading ? "Loading..." : "Pay"}
        </button>
      </form>
    </div>
  );
};
