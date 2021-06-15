import React from 'react';
import 'react-calendar/dist/Calendar.css';
import headerBanner from '../../../Images/web-dev Header.jpg';
import NavBar from '../../Shared/NavBar/NavBar';

const AppointmentHeader = () => {
    return (
        <div className="header-container">
            <NavBar></NavBar>
            <main style={{ height: '600px' }} className="row d-flex align-items-center">
                <div className="col-md-4 col-sm-6 col-12 offset-md-1">
                    <h1 style={{ color: '#3A4256' }}>Get Your<br /> Own Site</h1>
                    <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
                </div>
                <div className="col-md-6 col-sm-6 col-12">
                    <img src={headerBanner} alt="" className="img-fluid rounded" />
                </div>
            </main>
        </div>
    );
};

export default AppointmentHeader;