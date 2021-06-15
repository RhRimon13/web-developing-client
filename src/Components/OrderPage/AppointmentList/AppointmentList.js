import React from 'react';
import SideBar from '../../Shared/SideBar/SideBar';

const AppointmentList = ({ allAppointments }) => {
    console.log(allAppointments)
    return (
        <div>
            <div>
                <table className="table text-center  table-borderless">
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
                            allAppointments.map((allAppointment, index) =>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{allAppointment.userName}</td>
                                    <td>{allAppointment.email}</td>
                                    <td>{allAppointment.serviceName}</td>
                                    <td>{allAppointment.serviceCharge}</td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AppointmentList;