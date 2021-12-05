import React, { useMemo, useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import useResponsiveFontSize from '.././useResponsiveFontSize';
import './SimpleCardForm.css';
const useOptions = () => {
  const fontSize = useResponsiveFontSize();
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize,
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4"
          }
        },
        invalid: {
          color: "#9e2146"
        }
      }
    }),
    [fontSize]
  );

  return options;
};
const SimpleCardForm = (props) => {
  const [paymentError, setPaymentError] = useState({});
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const handlePayment = async event => {
    event.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    });

    if(payload.error){
      setPaymentError({'error':payload.error.message});
    }
    else{
      props.handleProcessPayment(payload.paymentMethod.id);
    }
    
  };
 
  return (
    <div>
      <form className="paymentForm">
        <h4>Card Details</h4>
        <CardElement
          options={options}
          onReady={() => {
            console.log("CardElement [ready]");
          }}
          onChange={event => {
            console.log("CardElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardElement [blur]");
          }}
          onFocus={() => {
            console.log("CardElement [focus]");
          }}
        />
        <button type="submit" className="payButton" disabled={!stripe} onClick={handlePayment}>
          Pay
        </button>
      </form>
      {
        paymentError && <p style={{color:'red'}}>{paymentError.error}</p>
      }
      
      </div>
      

  );
};

export default SimpleCardForm;