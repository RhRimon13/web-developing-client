import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import SideBar from '../../Shared/SideBar/SideBar';
import AppointmentList from '../AppointmentList/AppointmentList';

const AllAppointmentList = () => {
    const [allAppointments, setAllAppointments] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch(`https://obscure-lowlands-19157.herokuapp.com/allAppointmentList?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => {
                setAllAppointments(data)
            })
    }, [loggedInUser.email])
    console.log(allAppointments.length);
    return (
        <div className="row">
            <div className="col-md-2">
                <SideBar></SideBar>
            </div>
            <div className="col-md-10 p-4 pr-5 text-center" style={{ position: "relative", backgroundColor: "#D6DBDF" }}>
                <h1 style={{ color: '#2E4053', fontSize: '40px', fontFamily: 'Georgia' }}>Appointment List</h1>
                <AppointmentList key={allAppointments.serviceId} allAppointments={allAppointments}></AppointmentList>
            </div>

        </div>
    );
};

export default AllAppointmentList;