import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCardForm from "../SimpleCardForm/SimpleCardForm";

const stripePromise = loadStripe('pk_test_51JzxAqHWu6M8hhU9Y8PQYKAXp247u5niHLRWX2U1cw2OSrV2aZhPA2QYSPl28ywhYGkwluI5yqDfVq4wS35aWrfM00yeh4384N');
const ProcessPayment = () => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm></SimpleCardForm>
        </Elements>   
    );
};

export default ProcessPayment;