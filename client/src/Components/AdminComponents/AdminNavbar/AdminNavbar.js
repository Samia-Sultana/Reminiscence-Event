import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTasks, faPlus,faPenFancy } from '@fortawesome/free-solid-svg-icons'
import './AdminNavbar.css'

const AdminNavbar = (props) => {
    const url = props.url;
    return (
        <div className="navigation">
            <div className="nav-heading">
                <h2>REMINISCENCE EVENT</h2>
            </div>
            <div className="nav-items">
                <Link to="/admin/viewOrder" className="item">All orders</Link>
                <Link to="/admin/addService" className="item">Add Service</Link>
                <Link to="/admin/createAdmin" className="item">Create Admin</Link>
                <Link to="/admin/manageService" className="item">Manage service</Link>
 
            </div>

        </div>
    );
};

export default AdminNavbar;