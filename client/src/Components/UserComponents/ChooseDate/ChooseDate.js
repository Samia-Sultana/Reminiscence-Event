import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SelectedEvent } from '../../../App';
import './ChooseDate.css';

const ChooseDate = (props) => {
    const [selectedEvent,setSelectedEvent] = useContext(SelectedEvent);
    console.log(selectedEvent.eventName,selectedEvent.eventCost)
    return (
        <div>
            <h1>choose event date ........</h1>
            <Link to="/user/bookService">Checkout</Link>
        </div>
    );
};

export default ChooseDate;