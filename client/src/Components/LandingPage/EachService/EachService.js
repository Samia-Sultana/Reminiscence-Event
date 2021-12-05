import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SelectedEvent } from '../../../App';
import './EachService.css';

const EachService = (props) => {
    const { name, price, description, photo } = props.serviceInfo;
    const [selectedEvent, setSelectedEvent] = useContext(SelectedEvent);
    return (

        <Card style={{ width: '18rem' }} className="reviewCard">
            <Card.Img variant="top" src={photo} />
            <Card.Body>
                <div className="priceAndName">
                    <Card.Title>{name}-<small>${price}</small></Card.Title>
                    <Link to="/chooseDate" onClick={() =>
                        setSelectedEvent({ 'eventName': name,'eventCost': price })}>
                        Book now</Link>
                </div>
                <Card.Text className="reviewText">{description}</Card.Text>

            </Card.Body>
        </Card>
    );
};

export default EachService;