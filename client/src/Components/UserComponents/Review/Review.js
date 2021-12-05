import React from 'react';
import { useForm } from "react-hook-form";
import { Form, Button, Row, Col } from 'react-bootstrap';
import './Review.css';
const Input = ({ label, register, required }) => (
    <>
        <label>{label}</label>
        <input {...register(label, { required })} />
    </>
);


const Review = () => {
    console.log('review');
    const sessionEmail = sessionStorage.getItem('email');
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:4200/addReview', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => console.log(data))

    }

    return (
        <div className="reviewPage">
            <Form onSubmit={handleSubmit(onSubmit)} className="reviewForm">
                <Row className="g-2">
                    <Form.Group as={Col} className="mb-3" controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" {...register("clientName")} placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3" controlId="formEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" {...register("clientEmail")} defaultValue = {sessionEmail} />
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3 oneRow "  controlId="formEventType">
                    <Form.Label>Event Type</Form.Label>
                    <Form.Control type="text" size="lg" {...register("eventType")} placeholder="Enter event" />
                </Form.Group>

                <Form.Group className="mb-3 oneRow " controlId="formReview">
                    <Form.Label>Review</Form.Label>
                    <Form.Control as="textarea" type="text" {...register("review")} placeholder="Write review" style={{ height: '100px' }} />
                </Form.Group>

                <div className="oneRow">
                <Button variant="success" type="submit" >Send</Button>
                </div>
            </Form>
        </div>
    );
};

export default Review;