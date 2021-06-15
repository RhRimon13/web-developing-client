import React from 'react';
import SideBar from '../../Shared/SideBar/SideBar';

const ManageService = ({ allServices }) => {
    console.log(allServices);


    const removeService = (serviceId) => {
        fetch(`https://obscure-lowlands-19157.herokuapp.com/removeService/${serviceId}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => console.log('Deleted Successfully', data))
    }
    return (
        <div className=" container-fluid row">
            <div className="col-md-2">
                <SideBar></SideBar>
            </div>
            <div className="col-md-10 p-4 pr-5 text-center" style={{ position: "absolute", right: 0, backgroundColor: "#D6DBDF" }}>
                <h1 style={{ color: '#2E4053', fontSize: '40px', fontFamily: 'Georgia' }}>Service Manager</h1>
                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th className="text-secondary text-left" scope="col">Sr No</th>
                            <th className="text-secondary" scope="col">Service Name</th>
                            <th className="text-secondary" scope="col">Developer Name</th>
                            <th className="text-secondary" scope="col">Service Charge</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allServices.map((service, index) =>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{service.serviceName}</td>
                                    <td>{service.developer}</td>
                                    <td>{service.serviceCharge}</td>
                                    <td><button onClick={() => removeService(service.serviceId)} className="btn btn-danger">Delete Service</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageService;