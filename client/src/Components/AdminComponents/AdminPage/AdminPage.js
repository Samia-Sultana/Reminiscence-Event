import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useParams
  } from "react-router-dom";
import './AdminPage.css'
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import CreateAdmin from '../CreateAdmin/CreateAdmin';
import ViewOrders from '../ViewOrders/ViewOrders';
import ManageService from '../ManageService/ManageService';
import AddService from '../AddService/AddService';
 

const AdminPage = () => {
    let { selectedNav } = useParams();
    var content;
    const pageContent = () =>{
        if(selectedNav === 'createAdmin'){
            return content = <CreateAdmin/> 
        }
        else if(selectedNav === 'viewOrder'){
            return content = <ViewOrders/>;
        }
        else if(selectedNav === 'manageService'){
            return content = <ManageService/>
        }
        else if(selectedNav === 'addService'){
            return content = <AddService/>
        }
    }
    
    
    return (
        <div className="adminPage">
            <div className="adminNavbar">
                <AdminNavbar></AdminNavbar>
            </div>
            <div className="adminPageContent">
                    {
                        pageContent()
                    }
            </div>
        </div>
    );
};

export default AdminPage;