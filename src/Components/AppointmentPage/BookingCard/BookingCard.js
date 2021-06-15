import React, { useState } from 'react';
import { useHistory } from 'react-router';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = (props) => {
    // console.log(props)
    const { serviceImg, serviceName, serviceCharge, serviceId, developer } = props.service;


    const history = useHistory();
    const confirmAppointment = (serviceId) => {
        history.push(`/appointmentForm/${serviceId}`);
    }


    return (
        <div className="col-md-3 p-3">
            <div className="card h-100">
                <img className="p-1" style={{ height: '200px', width: '100%', borderRadius: '10px' }} src={serviceImg} alt="" />
                <div className="card-body text-center">
                    <h2 className="mt-3 mb-3">{serviceName}</h2>
                    <h5 className="mt-3 mb-3">Developed By: {developer}</h5>
                    <p className="text-secondary">You can get your preferable website here. So, why being late? Get your own website </p>
                    <h3>${serviceCharge}</h3>
                    <button onClick={() => confirmAppointment(serviceId)} className="btn btn-secondary" >Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;