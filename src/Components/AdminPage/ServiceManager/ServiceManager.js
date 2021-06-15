import React, { useEffect, useState } from 'react';
import ManageService from '../ManageService/ManageService';

const ServiceManager = () => {
    const [allServices, setAllServices] = useState([]);

    useEffect(() => {
        fetch('https://obscure-lowlands-19157.herokuapp.com/getService')
            .then(res => res.json())
            .then(data => setAllServices(data))
    }, [])
    return (
        <div>
            <ManageService allServices={allServices}></ManageService>
        </div>
    );
};

export default ServiceManager;