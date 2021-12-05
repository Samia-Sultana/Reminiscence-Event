import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import EachService from '../EachService/EachService';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4200/getServices')
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, [])
    return (

        <div className="showServiceArea">
            <div><h2>Events we plan</h2></div>
            <div className="reviewsArea">
                {
                    services.map(service => (
                        <EachService serviceInfo={service}></EachService>
                    ))
                }

            </div>
            <Button variant="primary" className="exploreButton">Explore</Button>
        </div>
    );
};

export default Services;