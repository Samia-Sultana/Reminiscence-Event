import React, { useEffect, useState } from 'react';
import EachBooking from '../EachBooking/EachBooking';
import './Booking.css';

const Bookings = () => {
    const [bookings,setBookings] = useState([]);
    const sessionEmail = sessionStorage.getItem('email');
    console.log(sessionEmail);
    useEffect(()=>{
        fetch(`http://localhost:4200/getBookingsBy/${sessionEmail}`)
        .then(res => res.json())
        .then(data => setBookings(data))
    },[])
    return (
        <div className="bookings">
            {
                bookings?.map(booking =>(
                    <EachBooking bookingInfo = {booking}></EachBooking>
                ))
            }
        </div>
    );
};

export default Bookings;