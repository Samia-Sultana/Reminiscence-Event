import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import './UserNavbar.css';

const UserNavbar = () => {
    
    
    return (
        <div className="user-navbar">
            <h2>Fresh Mart</h2>
            <div className="menu">
                <Link to="/">Home</Link>
                <Link to="/user/bookings">Orders</Link>
                <Link to="/user/bookService">Book now</Link>
                <Link to="/user/review">Review</Link>
                {
                    <Link to="/logout"><Button variant="success">Logout</Button></Link>
                }
            </div>

        </div>
    );
};

export default UserNavbar;