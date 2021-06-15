import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import banner from '../../../Images/web-dev Header.jpg'

const HeaderBanner = () => {
    const history = useHistory();
    const getAppointment = () => {
        history.push(`/appointment`);
    }
    return (
        <main style={{ height: '600px' }} className="row d-flex align-items-center m-3">
            <div className="col-md-4 col-sm-6 col-12 offset-md-1">
                <h1 style={{ color: '#3A4256' }}>Get Your<br /> Own Site</h1>
                <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
                <button onClick={getAppointment} className="btn btn-secondary">GET APPOINTMENT</button>
            </div>
            <div className="col-md-6 col-sm-6 col-12">
                <img src={banner} alt="" className="img-fluid rounded" />
            </div>
        </main>
    );
};

export default HeaderBanner;