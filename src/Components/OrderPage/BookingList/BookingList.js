import React from 'react';
import SideBar from '../../Shared/SideBar/SideBar';

const BookingList = ({ bookedAppointments }) => {
    console.log(bookedAppointments)
    return (
        <div className="row">
            <div className="col-md-2">
                <SideBar></SideBar>
            </div>
            <div className="col-md-10 p-4 pr-5 text-center" style={{ position: "absolute", right: 0, backgroundColor: "#D6DBDF" }}>
                <h1 style={{ color: '#2E4053', fontSize: '40px', fontFamily: 'Georgia' }}>My Bookings</h1>
                <table className="table text-center table-borderless">
                    <thead>
                        <tr>
                            <th className="text-secondary text-left" scope="col">Sr No</th>
                            <th className="text-secondary" scope="col">Name</th>
                            <th className="text-secondary" scope="col">Email </th>
                            <th className="text-secondary" scope="col">Service</th>
                            <th className="text-secondary" scope="col">Service Charge</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookedAppointments.map((bookedAppointment, index) =>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{bookedAppointment.userName}</td>
                                    <td>{bookedAppointment.email}</td>
                                    <td>{bookedAppointment.serviceName}</td>
                                    <td>{bookedAppointment.serviceCharge}</td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BookingList;