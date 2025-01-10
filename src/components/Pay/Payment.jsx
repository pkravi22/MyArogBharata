import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("your-publishable-key-here");

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card);

    if (result.error) {
      console.error(result.error.message);
    } else {
      // Send the token to your backend for payment processing
      console.log("Token received:", result.token);
      alert("Payment Successful!");
    }
  };

  return (
    <Elements stripe={stripePromise}>
      <div className="flex flex-col items-center py-8 px-4">
        <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
        <form onSubmit={handleSubmit} className="w-full max-w-lg p-4 border rounded-md bg-white">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Card Details</label>
            <CardElement className="p-2 border rounded-md" />
          </div>
          <button
            type="submit"
            disabled={!stripe}
            className="coloredbutton px-6 py-2 w-full"
          >
            Pay Now
          </button>
        </form>
      </div>
    </Elements>
  );
};

export default PaymentForm;
