import React from 'react';
import mon from '../../../Images/developer 1.jpg';
import disha from '../../../Images/developer 2.png';
import ileana from '../../../Images/developer 3.jpg';
import rashedi from '../../../Images/developer 4.jpg';
import rimon from '../../../Images/developer 5.jpg';
import Developers from '../Developers/Developers';


const Developer = () => {
    const developerInfo = [
        {
            name: 'Istiyak Mon',
            mobileNo: +8801868874789,
            developingField: 'Font-end Developer',
            img: mon
        },
        {
            name: 'Disha Pathani',
            mobileNo: +8801698987589,
            developingField: 'Font-end Developer',
            img: disha
        },
        {
            name: "Ileana D'cruz",
            mobileNo: +8801788934879,
            developingField: 'Back-end Developer',
            img: ileana
        },
        {
            name: 'Rh Rimon',
            mobileNo: +8801738934769,
            developingField: 'Full-stack Developer',
            img: rimon
        },
        {
            name: 'Rashedi Hasan',
            mobileNo: +8801859347584,
            developingField: 'Back-end Developer',
            img: rashedi
        }
    ]
    return (
        <div className="m-3">
            <h5 className="text-center mb-5" style={{ color: '#16A085', fontSize: '40px', fontFamily: 'Georgia' }}>Our Developers</h5>
            <div className="row">
                {
                    developerInfo.map(developerData => <Developers developerData={developerData}></Developers>)
                }
            </div>
        </div>
    );
};

export default Developer;