import React from 'react';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="user-navbar">
            <h2>Reminiscence Event</h2>
            <div className="menu">
                <Link to="/">Home</Link>
                <Link to="/user/bookings">User</Link>
                <Link to="/admin/addService">Admin</Link>
                <Link to="/deals">Deals</Link>
                <Link to="/login"><Button variant="primary">Login</Button></Link>
            </div>

        </div>
    );
};

export default Navbar;