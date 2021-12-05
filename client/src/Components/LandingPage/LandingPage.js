import React from 'react';
import AboutUs from './AboutUs/AboutUs';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import Reviews from './Reviews/Reviews';
import Services from './Services/Services';
import Banner from './Banner/Banner';
import './LandingPage.css';

const LandingPage = () => {
    
    return (
        <div className="landingPage">
            <div className="header">
                <Navbar></Navbar>
                <Banner></Banner>
            </div>
            <Services></Services>
            <AboutUs></AboutUs>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default LandingPage;