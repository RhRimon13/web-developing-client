import React from 'react';

const ReviewCard = (props) => {
    const { userName, companyNAme, description } = props.review;
    return (
        <div className="col-md-3 p-3 text-center">
            <h2 className="mt-3 mb-3">Reviewed By: {userName}</h2>
            <h5 className="mt-3 mb-3">Company Name: {companyNAme}</h5>
            <p className="text-secondary">{description}</p>
        </div>
    );
};

export default ReviewCard;