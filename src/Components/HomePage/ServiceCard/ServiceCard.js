import React from 'react';
import { useHistory } from 'react-router';

const ServiceCard = (props) => {

    const { serviceImg, serviceName, serviceCharge, serviceId, developer } = props.service;

    return (
        <div className="col-md-3 p-3 text-center">
            <img style={{ height: '200px', width: '100%', borderRadius: '10px' }} src={serviceImg} alt="" />
            <div>
                <h2 className="mt-3 mb-3">{serviceName}</h2>
                <h5 className="mt-3 mb-3">Developed By: {developer}</h5>
                <p className="text-secondary">You can get your preferable website here. So, why being late? Get your own website </p>
                <h3>${serviceCharge}</h3>
            </div>
        </div>
    );
};

export default ServiceCard;