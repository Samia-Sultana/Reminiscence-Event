import React from 'react';
import { useForm } from "react-hook-form";
import { Form, Button, Row, Col } from 'react-bootstrap';
const Input = ({ label, register, required }) => (
    <>
        <label>{label}</label>
        <input {...register(label, { required })} />
    </>
);

const Shippment = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);

    }
    return (
        <div className="shipmentPart">
            <Form onSubmit={handleSubmit(onSubmit)} >
                <Form.Group className="mb-3" controlId="shimentEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" {...register("clientEmail")} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="eventType">
                    <Form.Label>Event</Form.Label>
                    <Form.Control  {...register("event")} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control size="lg" type="address" {...register("clientAddress")} placeholder="Enter address" />
                </Form.Group>
                <Form.Group className="mb-3 " controlId="formPhone">
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control type="tel" {...register("contactNo")} placeholder="Enter contact number" />
                </Form.Group>
            </Form>
        </div>
    );
};

export default Shippment;