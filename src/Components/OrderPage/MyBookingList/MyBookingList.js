import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import BookingList from '../BookingList/BookingList';

const MyBookingList = () => {

    const [bookedAppointments, setBookAppointments] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch(`https://obscure-lowlands-19157.herokuapp.com/myBookingList?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => {
                setBookAppointments(data)
            })
    }, [loggedInUser.email])
    console.log(bookedAppointments)
    return (
        <div>
            <BookingList key={bookedAppointments.serviceId} bookedAppointments={bookedAppointments}></BookingList>
        </div>
    );
};

export default MyBookingList;