import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const [services, setService] = useState([]);

    useEffect(() => {
        fetch('https://obscure-lowlands-19157.herokuapp.com/getService')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <h5 className="text-center mb-5" style={{ color: '#16A085', fontSize: '40px', fontFamily: 'Georgia' }}>Our Services</h5>
            <div className="row mt-5 mr-2 ml-2">
                {
                    services.map(service => <ServiceCard key={service.serviceId} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;