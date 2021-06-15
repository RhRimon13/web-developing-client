import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';

const AppointMent = () => {
    const [appointmentDate, setAppointmentDate] = useState(new Date());
    const handleDateChange = date => {
        setAppointmentDate(date)
    }
    return (
        <div>
            <AppointmentHeader handleDateChange={handleDateChange}></AppointmentHeader>
            <BookAppointment date={appointmentDate}></BookAppointment>
            <Footer></Footer>

        </div>
    );
};

export default AppointMent;