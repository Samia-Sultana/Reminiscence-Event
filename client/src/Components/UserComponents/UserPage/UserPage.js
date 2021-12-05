import React from 'react';
import { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useParams
  } from "react-router-dom";
import './UserPage.css';
import UserNavbar from '../UserNavbar/UserNavbar';
import Review from '../Review/Review';
import Bookings from '../Bookings/Bookings';
import BookService from '../BookService/BookService';

const UserPage = () => {
    let { selectedNav } = useParams();
    var content;
    console.log("userPage");
    const pageContent = () =>{
        console.log('pageContent')
        if(selectedNav === 'bookService'){
            return content = <BookService/> 
        }
        else if(selectedNav === 'bookings'){
            return content = <Bookings/>;
        }
        else if(selectedNav === 'review'){
            return content = <Review/>;
        }
    }
    return (
        <div className="userPage">
            <div className="userNavbar">
                <UserNavbar></UserNavbar>
            </div>
            <div className="pageContent">
                    {
                        
                        pageContent()
                    }
            </div>
        </div>
    );
};

export default UserPage;