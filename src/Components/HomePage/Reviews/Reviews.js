import React, { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://obscure-lowlands-19157.herokuapp.com/getReviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <h5 className="text-center mb-5" style={{ color: '#16A085', fontSize: '40px', fontFamily: 'Georgia' }}>Client Reviews</h5>
            <div className="row mt-5 mr-2 ml-2">
                {
                    reviews.map(review => <ReviewCard review={review}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Reviews;