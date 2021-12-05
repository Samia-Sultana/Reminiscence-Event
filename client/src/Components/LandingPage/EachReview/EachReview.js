import React from 'react';
import './EachReview.css';
import { Card } from 'react-bootstrap';
import emma from '../ClientImage/emma.jpg';

const EachReview = (props) => {
    const { clientName, review } = props.reviewInfo;
    return (
        <Card style={{ width: '18rem' }} className="reviewCard">
            <Card.Img variant="top" src={emma} className="reviewImg" />
            <Card.Body>
                <Card.Title>{clientName}</Card.Title>
                <Card.Text className="reviewText">{review}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default EachReview;