import React, { useState, useContext } from 'react';
import { useForm } from "react-hook-form";
import { Form } from 'react-bootstrap';
import './CheckoutForm.css';
import '../SimpleCardForm/SimpleCardForm';
import SimpleCardForm from '../SimpleCardForm/SimpleCardForm';
import Button from '@restart/ui/esm/Button';
import { SelectedEvent } from '../../../App';
const Input = ({ label, register, required }) => (
    <>
        <label>{label}</label>
        <input {...register(label, { required })} />
    </>
);

const CheckoutForm = (props) => {
    const [shippingData,setShippingData] = props.shippingState;
    const { register, handleSubmit, errors } = useForm();
    const sessionEmail = sessionStorage.getItem('email');
    const [selectedEvent,setSelectedEvent] = useContext(SelectedEvent);
    const eventName = selectedEvent.eventName;
    const eventCost = selectedEvent.eventCost;

    const onSubmit = data => {
        console.log(data);
        const paymentPart = document.getElementById('paymentPart');
        paymentPart.style.display ="block";
        setShippingData(data);
    }

    
    return (

        <div >
            <Form onSubmit={handleSubmit(onSubmit)} className="checkoutForm">
                <div className="shippmentPart">
                    <Form.Group className="mb-3" controlId="shimentEmail" >
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" {...register("clientEmail")} defaultValue={sessionEmail} readOnly />
                        
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="eventType" >
                        <Form.Label>Event</Form.Label>
                        <Form.Control  {...register("eventType")} defaultValue={eventName} readOnly />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="eventCost" >
                        <Form.Label>Cost</Form.Label>
                        <Form.Control  {...register("eventCost")} defaultValue={eventCost} readOnly />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control size="lg" type="address" {...register("clientAddress",{ required: true })} placeholder="Enter address" />
                    </Form.Group>
                    <Form.Group className="mb-3 " controlId="formPhone">
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control type="tel" {...register("contactNo",{ required: true })} placeholder="Enter contact number" />
                    </Form.Group>
                    <Button type="submit" className="shipmentButton">Submit</Button>
                </div>
                <div id="paymentPart">
                    <SimpleCardForm handleProcessPayment={props.handleProcessPayment}></SimpleCardForm>
                </div>
            </Form>
        </div>

    );
    };

export default CheckoutForm;