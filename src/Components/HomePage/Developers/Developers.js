import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import './Developers.css'

const Developers = (props) => {
    const { img, name, mobileNo, developingField } = props.developerData;
    return (
        <div className="col-md-4 text-center">
            <img className="developerImg mb-3" src={img} alt="" />
            <h4>{name}</h4>
            <h5>{developingField}</h5>
            <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt} /> {mobileNo}</p>
        </div>
    );
};

export default Developers;