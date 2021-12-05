import React, { useState, useContext } from 'react';
import './BookService.css';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { SelectedEvent } from '../../../App';
const stripePromise = loadStripe('pk_test_51JzxAqHWu6M8hhU9Y8PQYKAXp247u5niHLRWX2U1cw2OSrV2aZhPA2QYSPl28ywhYGkwluI5yqDfVq4wS35aWrfM00yeh4384N');

const BookService = () => {
    const [shippingData,setShippingData] = useState(null);
    const [selectedEvent,setSelectedEvent] = useContext(SelectedEvent);
    console.log(selectedEvent.eventName,selectedEvent.eventCost)
    const handleProcessPayment = (paymentId) =>{
        const bookingDetails ={
            ...shippingData,
            'paymentId':paymentId,
            'orderTime': new Date(),
            'status': 'Pending'
        }
        fetch('http://localhost:4200/addBooking',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(bookingDetails)
        })
        .then(res => res.json)
        .then(data => console.log('booking placed successfully'))
    }

    return (
        <div className="bookService">
            <Elements stripe={stripePromise}>
                <CheckoutForm shippingState={[shippingData,setShippingData]} handleProcessPayment={handleProcessPayment}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default BookService;