import React, { useEffect, useState } from 'react';
import EachReview from '../EachReview/EachReview';
import './Reviews.css';

const Reviews = () => {
    const [reviews,setReviews] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:4200/getReviews')
        .then(res => res.json())
        .then(data =>{
            setReviews(data);
        })
    },[])
    return (
        
        <div className="showServiceArea">
            <div><h2>Reviews</h2></div>
            <div className="reviewsArea">
            {
                reviews.map(review =>(
                    <EachReview reviewInfo = {review}></EachReview>
                ))
            }
            
        </div>
        </div>
    );
};

export default Reviews;