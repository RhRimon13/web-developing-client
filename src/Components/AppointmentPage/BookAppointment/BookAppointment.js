import React, { useEffect, useState } from 'react';
import BookingCard from '../BookingCard/BookingCard';

const BookAppointment = ({ date }) => {
    const [services, setService] = useState([]);

    useEffect(() => {
        fetch('https://obscure-lowlands-19157.herokuapp.com/getService')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <h2 className="text-center text-brand mt-5">Available Appointments on {date.toDateString()}</h2>
            <div className="row mr-2 ml-2">
                {
                    services.map(service => <BookingCard key={service.serviceId} date={date} service={service}></BookingCard>)
                }
            </div>
        </div>
    );
};

export default BookAppointment;