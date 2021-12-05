import React from 'react';
import './EachBooking.css';
import { Row, Col } from 'react-bootstrap';

const EachBooking = (props) => {
    const {clientEmail, eventType, status, orderTime, eventCost} = props.bookingInfo;
    return (
        <div className="eachBooking">
            <Row className="g-2">
            <Col></Col>
            <Col><p className="status">{status}</p></Col>
            </Row>
            <Row className="g-2">
                <Col><p>Event: {eventType}</p></Col>
                <Col><p>Cost: ${eventCost}</p></Col>
            </Row>
                <p>Order Date: {orderTime.substring(0,10)}</p>
            
        </div>
    );
};

export default EachBooking;